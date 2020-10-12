import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import {
  render, screen, within,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import App from '../app';

const setup = (initialPath = '/') => {
  let history;

  const view = render(
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
      <Route
        path="*"
        render={(props) => {
          history = props.history;
          return null;
        }}
      />
    </MemoryRouter>,
  );
  return { ...view, history };
};

describe('post table', () => {
  it('shows posts per hour in table', async () => {
    setup('/search/reactjs');

    let cellToClick;
    let numPosts;

    screen.getByText('loading-spinner.svg');

    const heatmap = await screen.findByTestId('heatmap');

    expect(heatmap).toBeInTheDocument();
    const cells = await within(heatmap).findAllByRole('button');

    // posts table is shown when a box is cliked

    // it is not shown when there are no posts for the selected weekday/hour
    // eslint-disable-next-line prefer-destructuring
    cellToClick = cells[0];
    numPosts = Number(cellToClick.innerHTML);

    expect(numPosts).toBe(0);
    userEvent.click(cellToClick);

    // expect(postsTable).not.toBeInTheDocument();
    expect(await screen.queryByTestId('postsTable')).toBeNull();

    // it is shown when there are posts for the selected weekday/hour
    // eslint-disable-next-line prefer-destructuring
    cellToClick = cells[28]; // contains a deketed author
    numPosts = Number(cellToClick.innerHTML);

    expect(numPosts).not.toBe(0);
    userEvent.click(cellToClick);

    // posts table is shown when a box is cliked
    const postsTable = await screen.findByTestId('postsTable');
    expect(postsTable).toBeInTheDocument();

    const postsRows = await within(postsTable).findAllByTestId('postRow');

    expect(postsRows.length).not.toEqual(0);
    expect(postsRows.length).toEqual(numPosts);

    // links
    postsRows.forEach((postRow) => {
      // if the author has been deleted it should not be a link
      const links = within(postRow).getAllByRole('link');
      if (postRow.innerHTML.includes('[deleted]')) {
        expect(links.length).toEqual(1);
        expect(links[0]).toHaveAttribute('href', expect.not.stringContaining('https://reddit.com/u/'));
      } else {
      // 'match', /https:\/\/(www.)?reddit.com\/
      // r\/javascript\/comments\/er5hqm\/the_new_babel_release_gives_support_for\/?/
      // the title links to the post on Reddit
        expect(links[0]).toHaveAttribute('href', expect.stringContaining('https://www.reddit.com/r/'));
        // the title links opens in a new browser tab
        expect(links[0]).toHaveAttribute('target', '_blank');
        userEvent.click(links[0]);

        // the author links to the author's reddit profile
        expect(links[1]).toHaveAttribute('href', expect.stringContaining('https://reddit.com/u/'));
        // the author links opens in a new browser tab
        expect(links[1]).toHaveAttribute('target', '_blank');
      }

      // the posts are sorted by the time they have been created
    });
  });
});

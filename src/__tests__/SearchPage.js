import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import {
  render, screen, within, waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { axe } from 'jest-axe';
import 'jest-styled-components';

import App from '../app';
import { defaultSubReddit } from '../config';

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

describe('heatmap', () => {
  it('loads top post for subreddit in URL', async () => {
    setup('/search/reactjs');

    screen.getByText('loading-spinner.svg');

    // this is just a placeholder assertion that tests if the result
    // was rendered correctly
    // expect(await screen.findByText('500')).toBeInTheDocument();

    expect(await screen.findByTestId('heatmap')).toBeInTheDocument();
    await waitFor(() => expect(screen.queryByText('loading-spinner.svg')).not.toBeInTheDocument());

    const heatmap = screen.getByTestId('heatmap');
    const cells = await within(heatmap).findAllByRole('button');
    expect(cells.length).toEqual(7 * 24);

    const numberOfPostsPerCell = cells.map((cell) => cell.innerHTML);
    expect(numberOfPostsPerCell).toMatchSnapshot();

    const timezone = screen.getByText('All times are shown in your timezone:');
    expect(within(timezone).getByText('Europe/Berlin')).toBeInTheDocument();
  });

  it('highlights cell on click', async () => {
    setup('/search/reactjs');

    const heatmap = await screen.findByTestId('heatmap');
    const cells = await within(heatmap).findAllByRole('button');

    const cellToClick = cells[1];
    // expect(cellToClick).toHaveStyle('border: none');
    expect(cellToClick).toHaveStyleRule('border: none');

    userEvent.click(cellToClick);
    // expect(cellToClick).toHaveStyle('border: 1px solid #1e2537');
    expect(cellToClick).toHaveStyleRule('border: 1px solid #1e2537');
  });

  test('renders error message', async () => {
    setup('/search/failing-request');

    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();
  });
});

describe('subreddit form', () => {
  it('updates the URL when submitting the form', async () => {
    const { history } = setup('/search/python');
    const searchInput = screen.getByLabelText('r /');

    expect(searchInput.value).toBe('python');

    userEvent.clear(searchInput);
    userEvent.type(searchInput, 'Gatsbyjs');

    expect(searchInput.value).toBe('Gatsbyjs');

    const submitButton = screen.getByRole('button', { name: /search/i });
    userEvent.click(submitButton);

    expect(history.location.pathname).toEqual('/search/Gatsbyjs');
  });

  it('input value changes to default subredit when seach link in header is clicked', async () => {
    setup('/search/reactjs');
    const searchInput = screen.getByRole('textbox');
    const header = screen.getByRole('banner');
    const searchLink = within(header).getByRole('link', { name: /search/i });

    userEvent.click(searchLink);

    expect(searchInput.value).toBe(defaultSubReddit);
    await waitFor(() => expect(screen.queryByText('loading-spinner.svg')).not.toBeInTheDocument());
  });

  it('no accessibility violation', async () => {
    const { container } = setup('/search/reactjs');

    expect(await screen.findByTestId('heatmap')).toBeInTheDocument();
    expect(await axe(container)).toHaveNoViolations();
  });
});

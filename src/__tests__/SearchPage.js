import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import App from '../app';
import { defaultSubReddit } from '../config';

const setup = (initialPath = '/') => {
  let history;

  render(
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
  return { history };
};

describe('search page', () => {
  it('loads top post for subreddit in URL', async () => {
    setup('/search/reactjs');

    screen.getByText('loading-spinner.svg');

    // this is just a placeholder assertion that tests if the result
    // was rendered correctly
    expect(await screen.findByText('500')).toBeInTheDocument();
    expect(screen.queryByText('loading-spinner.svg')).toBeInTheDocument();
  });

  test('renders error message', async () => {
    setup('/search/failing-request');

    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();
  });
});

describe('subreddit form', () => {
  it('updates the URL when submitting the form', () => {
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

  it('input value changes to default subredit when seach link in header is clicked', () => {
    setup('/search/reactjs');
    const searchInput = screen.getByRole('textbox');
    const header = screen.getByRole('banner');
    const searchLink = within(header).getByRole('link', { name: /search/i });

    userEvent.click(searchLink);

    expect(searchInput.value).toBe(defaultSubReddit);
  });
});

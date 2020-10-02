import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import { defaultSubReddit } from '../config';
import App from '../app';

const setup = (initialPath = '/') => {
  let history;
  let subredditName;
  const redditUrl = `https://www.reddit.com/r/${subredditName}/top.json?t=year&limit=100`;

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

describe('load the data', () => {
  it('fetch the top 500 posts of the last year for the specified subreddit on form submit', async () => {
    const { history } = setup('/search/javascript');
    const subredditInput = screen.getByLabelText('r /');
    const submitButton = screen.getByRole('button', { name: /search/i });

    userEvent.clear(subredditInput);
    userEvent.type(subredditInput, 'reactjs');
    expect(subredditInput.value).toBe('reactjs');

    userEvent.click(submitButton);
    expect(history.location.pathname).toEqual('/search/reactjs');

    expect(screen.findByText(/is losding/i)).toBeInTheDocument();
  });
});

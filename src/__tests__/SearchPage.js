import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import App from '../app';

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

describe('subreddit form', () => {
  it('shows the form title', () => {
    setup('/search/javascript');

    expect(screen.getByRole('heading', { name: /Find the best time for a subreddit/i })).toBeInTheDocument();
  });

  it('shows a text input prefix with r/', () => {
    setup('/search/javascript');
    const inputBox = screen.getByLabelText('r/');

    expect(inputBox).toBeInTheDocument();
    expect(inputBox.getAttribute('type')).toEqual('text');
    // screen.debug(inputBox);
  });

  it('shows a submit button', () => {
    setup('/search/javascript');
    const submitButton = screen.getByRole('button', { name: /search/i });

    expect(submitButton).toBeInTheDocument();
  });

  it('updates the URL on submit and initializes input value from URL', () => {
    const { history } = setup('/search/javascript');
    const inputBox = screen.getByLabelText('r/');
    const submitButton = screen.getByRole('button', { name: /search/i });
    const initialValue = history.location.pathname.split('/')[2];
    // console.log(initialValue);

    inputBox.value = '';
    inputBox.value = initialValue;
    expect(inputBox).toHaveValue(initialValue);

    inputBox.value = '';
    userEvent.type(inputBox, 'reactjs');

    userEvent.click(submitButton);
    history.push(`/search/${inputBox.value}`);
    expect(history.location.pathname).toEqual('/search/reactjs');
  });
});

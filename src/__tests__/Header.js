import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import App from '../common/app';

const setup = (initialPath = '/') => {
  let history;

  render(
    <MemoryRouter initialEntries={initialPath}>
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

describe('Header', () => {
  it('navigates to home page when logo is clicked', () => {
    setup('/search/javascript');

    const logoLink = screen.getByRole('link', { name: '/logo\.svg' });
    userEvent.click(logoLink);

    expect(screen.getByText(/home page/i)).toBeInTheDocument();
  });
});

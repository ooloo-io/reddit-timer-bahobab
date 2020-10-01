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

describe('footer', () => {
  it('navigates to the home page when the logo is clicked', () => {
    setup('/search/javascript');
    const logoLink = screen.getByRole('link', { name: /sign.svg/i });
    userEvent.click(logoLink);

    expect(screen.getByText(/home page/i)).toBeInTheDocument();
  });

  it('navigates to terms page when terms link is clicked', () => {
    setup('/search/javascript');
    const termsLink = screen.getByRole('link', { name: /terms/i });
    userEvent.click(termsLink);

    expect(screen.getByText(/Terms Page/i)).toBeInTheDocument();
  });

  it('contains link pointing to ooloo.io/employers page', async () => {
    setup();
    const employerLink = screen.getAllByRole('link', { name: /ooloo.io/i });
    // await userEvent.click(employerLink);

    expect(employerLink[1]).toHaveAttribute('href', 'https://ooloo.io/employers');
  });
});

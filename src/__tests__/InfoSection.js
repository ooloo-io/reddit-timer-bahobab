import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
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

describe('info section', () => {
  it("contains 'About' section and 'How it works section", () => {
    setup();
    // console.log('>>History', history);
    // screen.debug();
    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /How it works/i })).toBeInTheDocument();
  });

  it("About section has a link that points to 'https://ooloo.io/employers'", () => {
    setup();
    const employerLink = screen.getByRole('link', { name: /click here for more information/i });
    expect(employerLink).toHaveAttribute('href', 'https://ooloo.io/employers');
  });

  it("About section has a link that points to 'https://ooloo.io'", () => {
    setup();
    const oolooLink = screen.getAllByRole('link', { name: /ooloo.io/i });

    expect(oolooLink[0]).toHaveAttribute('href', 'https://ooloo.io');
  });
});

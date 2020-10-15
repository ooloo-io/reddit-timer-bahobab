import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import App from '../app';

const setup = (initialPath = '/') => {
  // access history as described in the docs
  // https://reactrouter.com/web/guides/testing/checking-location-in-tests
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

describe('homepage', () => {
  it('navigates to search page when button is clicked', () => {
    const { history } = setup();
    const ctaButton = screen.getByRole('link', { name: /show me the best time/i });
    userEvent.click(ctaButton);

    // expect(screen.getByText(/search page/i)).toBeInTheDocument();
    expect(history.location.pathname).toEqual('/search/javascript');
  });

  it('navigates to search page when heatmap image is clicked', () => {
    const { history } = setup();
    const heatmapImage = screen.getByAltText(/Screenshots of heatmap/i);
    userEvent.click(heatmapImage);

    // expect(screen.getByText(/search page/i)).toBeInTheDocument();
    expect(history.location.pathname).toEqual('/search/javascript');
  });
});

describe('info section', () => {
  it("contains 'About' section and 'How it works section", () => {
    setup();
    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /How it works/i })).toBeInTheDocument();
  });

  it('contains links pointing to ooloo home and employers page', () => {
    setup();
    const aboutSection = screen.getAllByRole('article')[1];

    const oolooHomeLink = within(aboutSection).getByRole('link', { name: /ooloo\.io/i });
    expect(oolooHomeLink).toHaveAttribute('href', 'https://ooloo.io');

    const employersLink = within(aboutSection).getByRole('link', { name: /click here for more information/i });
    expect(employersLink.getAttribute('href')).toEqual('https://ooloo.io/employers');
  });
});

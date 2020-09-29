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

describe('hero section', () => {
  it('shows a title and subtitle', () => {
    setup();
    const title = screen.getByTitle('hero-title');
    const subtitle = screen.getByTitle('hero-subtitle');
    // console.log('>>Title', title);
    expect(title).toContainHTML('No reactions to your reddit posts?');
    expect(subtitle).toContainHTML('Great timing, great results! Find the best time to post on your subreddit.');
  });

  it("shows a CTA button and the default subreddit '/r/javascript'", () => {
    setup();
    const ctaButton = screen.getByRole('cta');
    const subReddit = screen.getByRole('subreddit');

    expect(subReddit).toBeVisible();
    expect(ctaButton).toBeVisible();
  });

  it('shows an image of the heatmap', () => {
    setup();
    const heatmap = screen.getByRole('heatmap');

    expect(heatmap).toBeVisible();
  });

  it('the button and the image link to the search page', () => {
    setup();
    const imageLink = screen.getByRole('link', { name: /table\.svg/i });
    const buttonLink = screen.getByRole('link', { name: /SHOW ME THE BEST TIME/i });

    expect(buttonLink.getAttribute('href')).toEqual('/search/javascript');
    expect(imageLink.getAttribute('href')).toEqual('/search/javascript');
  });

  it("when clicking the image link the default subreddit 'javascript' is included in the URL", () => {
    const { history } = setup();
    const imageLink = screen.getByRole('link', { name: /table\.svg/i });

    userEvent.click(imageLink);
    expect(history.location.pathname).toContain('javascript');
  });

  it("when clicking the button link the default subreddit 'javascript' is included in the URL", () => {
    const { history } = setup();
    const buttonLink = screen.getByRole('link', { name: /SHOW ME THE BEST TIME/i });

    userEvent.click(buttonLink);
    expect(history.location.pathname).toContain('javascript');
  });
});

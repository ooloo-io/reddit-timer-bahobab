import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import fetchMock from 'jest-fetch-mock';

// import { defaultSubReddit } from '../config';
import App from '../app';
import mockResponse1 from './__mocks__/subreddit-reactjs-response1.json';
import mockResponse2 from './__mocks__/subreddit-reactjs-response2.json';
import mockResponse3 from './__mocks__/subreddit-reactjs-response3.json';
import mockResponse4 from './__mocks__/subreddit-reactjs-response4.json';
import mockResponse5 from './__mocks__/subreddit-reactjs-response5.json';

fetchMock.enableMocks();

const setup = (initialPath = '/') => {
  let history;
  // let subredditName;
  // const redditUrl = `https://www.reddit.com/r/${subredditName}/top.json?t=year&limit=100`;

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
    fetch.once(JSON.stringify(mockResponse1));
    // .once(JSON.stringify(mockResponse2))
    // .once(JSON.stringify(mockResponse2))
    // .once(JSON.stringify(mockResponse3))
    // .once(JSON.stringify(mockResponse4))
    // .once(JSON.stringify(mockResponse5));

    // console.log('$%$%$%: ', response;
    const { history } = setup('/search/javascript');

    const subredditInput = screen.getByLabelText('r /');
    const submitButton = screen.getByRole('button', { name: /search/i });

    userEvent.clear(subredditInput);
    userEvent.type(subredditInput, 'reactjs');
    expect(subredditInput.value).toBe('reactjs');

    userEvent.click(submitButton);
    expect(history.location.pathname).toEqual('/search/reactjs');

    const loadingMessage = screen.getByText(/is loading/i);
    expect(loadingMessage).toBeInTheDocument();
    // screen.debug()

    expect(await screen.findByText(/100/i)).toBeInTheDocument();
    expect(fetch).toHaveBeenCalledWith('https://www.reddit.com/r/javascript/top.json?t=year&limit=100');
    // screen.debug(searchResults);
  });
});

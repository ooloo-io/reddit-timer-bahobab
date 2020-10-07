import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import {
  each, render, screen, within,
} from '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

// import {cellBackgroundColorMap} from '../config';

import App from '../app';

const setup = (initialPath = '/') => {
  let history;

  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Route
        path="*"
        render={(props) => {
          history = props.history;
        }}
      />
    </MemoryRouter>,
  );
  return { history };
};

describe('heatmap', () => {
  it('weekdays are shown from Sunday to Saturday', () => {
    setup('/search/reactjs');
    // find weekday container element tr.weekday
    // assert that it contains Sunday, Monday, Tuesday, Wednesday
    // Thursday, Friday, Saturday
  });

  it.skip('hours are shown from 12:00am to 10:00pm', () => {
    setup('/search/reactjs');
    // find hours container element th.timeline
    // assert that it contains 12:00am, 2:00am...
  });

  it.skip('each combination of weekday and hour is represented by a squaare box', () => {
    setup('/search/reactjs');
    // select cells td.cell
    // assert that each has width === height
    // assert that innerText.value is a number
    // assert that background-color correspond to numeric innerText value
    // assert that element is highlighted when hovered
    // assert that element is highlighted when clicked
  });

  it.skip("the user' timezone is shown below the heatmap", () => {
    setup('/search/reactjs');
    // select div.timezone
    // assert that the element contains "America/Chicago - Central Saving Time"
  });
});

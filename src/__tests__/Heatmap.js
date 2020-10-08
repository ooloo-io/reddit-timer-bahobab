import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import {
  render, screen, waitForElementToBeRemoved, within,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import {
  cellBackgroundColorMap, mapWeekday, postsTimeSlots,
} from '../config';

import App from '../app';

const weekdays = Object.values(mapWeekday);
const cellBackgroundColor = Object.values(cellBackgroundColorMap);

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

describe('heatmap', () => {
  it.each(weekdays)(
    'weekdays are shown from Sunday to Saturday', async (weekday) => {
      setup('/search/less-than-500-posts');
      // find weekday container element tr.weekday
      // assert that it contains Sunday, Monday, Tuesday, Wednesday
      // Thursday, Friday, Saturday
      const spinner = screen.getByText('loading-spinner.svg');

      await waitForElementToBeRemoved(spinner);

      screen.getByRole('table');
      // weekday
      screen.getByRole('cell', { name: weekday });
    },
  );

  it.each(postsTimeSlots)(
    'hours are shown from 12:00am to 10:00pm', async (postsTimeSlot) => {
      setup('/search/reactjs');
      // find hours container element th.timeline
      // assert that it contains 12:00am, 2:00am..
      const spinner = screen.getByText('loading-spinner.svg');

      await waitForElementToBeRemoved(spinner);

      screen.getByRole('table');

      const timeSlots = screen.getAllByRole('columnheader');
      // screen.debug(timeSlot);
      within(timeSlots[1]).getByText(postsTimeSlot);
    },
  );

  it('each combination of weekday and hour is represented by a square box', async () => {
    setup('/search/less-than-500-posts');

    const spinner = screen.getByText('loading-spinner.svg');
    await waitForElementToBeRemoved(spinner);
    screen.getByRole('table');

    const cells = await document.querySelector('td.cell');
    // select cells td.cell
    const el = within(cells).getByText(cells.textContent);
    const numPosts = Number(el.textContent);

    expect(el).toHaveStyle({ border: 'unset', backgroundColor: '#a0ce93' });
    // assert that background-color correspond to numeric innerText value
    expect(el).toHaveStyle({ backgroundColor: `${cellBackgroundColor[numPosts]}` });

    // assert that each has width === height
    expect(el).toHaveStyleRule('width', '40px');
    expect(el).toHaveStyleRule('height', '40px');

    // assert that innerText.value is a number
    // expect(el).toHaveValue(numPosts);

    // assert that element is highlighted when hovered
    userEvent.hover(el);
    expect(el).toHaveStyle({ border: '1px solid red' });
    userEvent.unhover(el);
    expect(el).toHaveStyle({ border: 'unset' });

    // assert that element is highlighted when clicked
    userEvent.click(el);
    expect(el).toHaveStyle({ border: '1px solid red' });
  });

  it("the user' timezone is shown below the heatmap", async () => {
    setup('/search/less-than-500-posts');
    // select div.timezone
    // assert that the element contains "America/Chicago - Central Saving Time"
    const spinner = screen.getByText('loading-spinner.svg');

    await waitForElementToBeRemoved(spinner);
    screen.getByRole('table');
    screen.getByText('America/Chicago - Central Daylight Time');
  });
});

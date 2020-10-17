import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import {
  render, screen, waitFor, within,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import App from '../app';

const setup = (initialPath = '/') => {
  let history;

  const view = render(
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

  return { ...view, history };
};

describe('feature #1: choose heatmap color scheme', () => {
  it('heatmap shows color scheme choices', async () => {
    setup('/search/javascript');

    screen.getByText('loading-spinner.svg');

    expect(await screen.findByRole('heading', { name: 'Color Scheme' })).toBeInTheDocument();

    const defaultColorScheme = screen.getByLabelText('default');
    const chocoColorScheme = screen.getByLabelText('choco');

    userEvent.click(defaultColorScheme);
    expect(defaultColorScheme.checked).toBe(true);
    expect(chocoColorScheme.checked).toBe(false);

    userEvent.click(chocoColorScheme);
    expect(chocoColorScheme.checked).toBe(true);
    expect(defaultColorScheme.checked).toBe(false);
  });
});

describe('feature #2: optionally display posts table in modal', () => {
  it('shows posts table on the page when a cell is clicked and modal option is not checked', async () => {
    setup('/search/javascript');

    screen.getByText('loading-spinner.svg');
    await waitFor(() => expect(screen.queryByText('loading-spinner.svg')).not.toBeInTheDocument());

    const heatmap = screen.getByTestId('heatmap');
    const cells = await within(heatmap).findAllByRole('button');
    const cellToClick = cells[1];

    const selectDisplayInModal = screen.getByLabelText('Show Posts in Modal Window');
    expect(selectDisplayInModal.checked).toBe(false);

    expect(screen.queryByRole('table')).not.toBeInTheDocument();

    userEvent.click(cellToClick);
    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.queryByTestId('postsModal')).toBeNull();
  });

  it('shows posts table in a modal window when a cell is clicked and modal option checked', async () => {
    setup('/search/javascript');

    screen.getByText('loading-spinner.svg');
    await waitFor(() => expect(screen.queryByText('loading-spinner.svg')).not.toBeInTheDocument());

    const heatmap = screen.getByTestId('heatmap');
    const cells = await within(heatmap).findAllByRole('button');
    const cellToClick = cells[1];

    const selectDisplayInModal = screen.getByLabelText('Show Posts in Modal Window');
    expect(selectDisplayInModal.checked).toBe(false);

    userEvent.click(selectDisplayInModal);
    expect(selectDisplayInModal.checked).toBe(true);
    userEvent.click(cellToClick);

    const modalWindow = screen.getByTestId('postsModal');
    expect(modalWindow).toBeInTheDocument();
    expect(within(modalWindow).getByRole('table')).toBeInTheDocument();

    const closeModalButton = within(modalWindow).getByRole('button');
    userEvent.click(closeModalButton);
    expect(screen.queryByTestId('postsModal')).toBeNull();
    expect(screen.queryByRole('table')).not.toBeInTheDocument();
  });
});

describe('feature #3', () => {
  it('shows a cell has a red dotted border if cell contains deleted author', async () => {
    setup('/search/javascript');

    const heatmap = await screen.findByTestId('heatmap');
    const cells = await within(heatmap).findAllByText('3');
    const cellWithDeletdAuthor = cells[4];

    userEvent.click(cellWithDeletdAuthor);
    const table = screen.getByRole('table');

    const rowWithDeletedUser = within(table).getAllByRole('row')[2];
    const authorCell = within(rowWithDeletedUser).getAllByRole('cell')[4];

    expect(authorCell.innerHTML).toBe('[deleted]');
    // screen.debug(cellWithDeletdAuthor);
    expect(cellWithDeletdAuthor.getAttribute('style')).toEqual('border: 1px dotted red;');
  });
});

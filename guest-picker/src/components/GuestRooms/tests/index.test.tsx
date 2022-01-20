import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { GuestRooms } from '..';
import { GuestRoomsProvider } from '../../../GuestRooms/contexts/GuestRoomsContext';

function getFirstOption(name: string) {
  return screen.getAllByRole('option', {
    name,
  })[0] as HTMLOptionElement;
}

describe('GuestRooms', () => {
  it('interacts with all elements in the page', () => {
    render(
      <GuestRoomsProvider guestRoomsString="1:4,6">
        <GuestRooms />
      </GuestRoomsProvider>
    );

    // Verify children in the page
    const selectLabel1 = screen.getByText('Child 1 age');
    expect(selectLabel1).toBeInTheDocument();

    const selectLabel2 = screen.getByText('Child 2 age');
    expect(selectLabel2).toBeInTheDocument();

    const selectLabel3 = screen.queryByText('Child 3 age');
    expect(selectLabel3).not.toBeInTheDocument();

    // selects new age option and verify selected option
    const select = screen.getAllByRole('combobox')[0];
    const selectedOption = getFirstOption('4');
    expect(selectedOption.selected).toBeTruthy();

    const newSelectedOption = getFirstOption('3');
    userEvent.selectOptions(select, newSelectedOption);
    expect(selectedOption.selected).toBeFalsy();
    expect(newSelectedOption.selected).toBeTruthy();

    // create and delete a new room
    expect(screen.queryByText(/Room 2/i)).not.toBeInTheDocument();

    const addRoomButton = screen.getByRole('button', { name: '+ Add room' });
    userEvent.click(addRoomButton);

    expect(screen.queryByText(/Room 2/i)).toBeInTheDocument();

    const removeRoomButton = screen.getByRole('button', {
      name: 'Remove room',
    });

    userEvent.click(removeRoomButton);
    expect(screen.queryByText(/Room 2/i)).not.toBeInTheDocument();

    // delete children
    expect(screen.getByText('Child 2 age')).toBeInTheDocument();
    const secondCloseButton = screen.getByTestId('close-button-1');
    userEvent.click(secondCloseButton);
    expect(screen.queryByText('Child 2 age')).not.toBeInTheDocument();

    expect(screen.getByText('Child 1 age')).toBeInTheDocument();
    const firstCloseButton = screen.getByTestId('close-button-0');
    userEvent.click(firstCloseButton);
    expect(screen.queryByText('Child 1 age')).not.toBeInTheDocument();
  });
});

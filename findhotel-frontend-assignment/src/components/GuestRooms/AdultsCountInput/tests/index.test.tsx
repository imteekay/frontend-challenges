import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AdultsCountInput } from '..';
import { GuestRoomsProvider } from '../../../../GuestRooms/contexts/GuestRoomsContext';

describe('AdultsCountInput', () => {
  it('increases and decreases count by clicking buttons', () => {
    render(
      <GuestRoomsProvider>
        <AdultsCountInput roomIndex={0} />
      </GuestRoomsProvider>
    );

    const count = screen.getByText('2');
    expect(count).toBeInTheDocument();

    const minusButton = screen.getAllByRole('button')[0];
    userEvent.click(minusButton);
    const decreasedCount = screen.getByText('1');
    expect(decreasedCount).toBeInTheDocument();

    const plusButton = screen.getAllByRole('button')[1];
    userEvent.click(plusButton);
    userEvent.click(plusButton);
    const increasedCount = screen.getByText('3');
    expect(increasedCount).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import { NumberInput } from '..';
import { GuestRoomsProvider } from '../../../GuestRooms/contexts/GuestRoomsContext';

describe('NumberInput', () => {
  it('renders the value between buttons', () => {
    const noop = () => {};

    render(
      <GuestRoomsProvider>
        <NumberInput
          value={3}
          increaseValue={noop}
          decreaseValue={noop}
          minValue={1}
          maxValue={5}
        />
      </GuestRoomsProvider>
    );

    expect(screen.getByText('3')).toBeInTheDocument();
  });
});

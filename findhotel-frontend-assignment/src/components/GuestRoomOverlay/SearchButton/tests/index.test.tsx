import { render, screen } from '@testing-library/react';
import { SearchButton } from '..';
import { GuestRoomsProvider } from '../../../../GuestRooms/contexts/GuestRoomsContext';

describe('SearchButton', () => {
  it('renders the button', () => {
    render(
      <GuestRoomsProvider>
        <SearchButton onSearch={() => {}} />
      </GuestRoomsProvider>
    );

    const button = screen.getByRole('button', {
      name: /Search 1 room • 2 guests/i,
    });

    expect(button).toBeInTheDocument();
  });
});

import { GuestRooms } from '../GuestRooms';
import { GuestRoomsProvider } from '../../GuestRooms/contexts/GuestRoomsContext';

export const GuestRoomOverlay = () => (
  <GuestRoomsProvider guestRoomsString="1:0,13,16">
    <GuestRooms />
  </GuestRoomsProvider>
);

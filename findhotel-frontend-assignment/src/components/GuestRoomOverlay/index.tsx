import { GuestRooms } from '../GuestRooms';
import { GuestRoomsProvider } from '../../GuestRooms/contexts/GuestRoomsContext';
import { css } from '@emotion/css';

const overlayClassName = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GuestRoomOverlay = () => (
  <div className={overlayClassName}>
    <GuestRoomsProvider guestRoomsString="1:0,13,16">
      <GuestRooms />
    </GuestRoomsProvider>
  </div>
);

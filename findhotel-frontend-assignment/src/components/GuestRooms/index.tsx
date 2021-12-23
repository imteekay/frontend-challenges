import { useContext } from 'react';
import { GuestRoom } from './GuestRoom';
import { GuestRoomsContext } from '../../GuestRooms/contexts/GuestRoomsContext';
import { Button } from '../Button';
import { css } from '@emotion/css';

const guestRoomsWrapperStyle = css`
  overflow-y: scroll;
  padding: 16px 16px 80px;
  flex-grow: 1;
`;

const roomWrapperStyle = css`
  border-bottom: 1px solid #eff2f6;
  margin-bottom: 16px;
`;

export const GuestRooms = () => {
  const { getRooms, addRoom } = useContext(GuestRoomsContext);
  const rooms = getRooms();

  return (
    <div className={guestRoomsWrapperStyle}>
      {rooms.map((_, index) => (
        <div key={`room-key-${index}`} className={roomWrapperStyle}>
          <GuestRoom index={index} />
        </div>
      ))}
      <Button variant="secondary" onClick={addRoom} fullWidth>
        + Add room
      </Button>
    </div>
  );
};

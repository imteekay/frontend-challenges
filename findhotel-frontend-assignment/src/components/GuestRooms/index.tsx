import { useContext } from 'react';
import { GuestRoom } from './GuestRoom';
import { GuestRoomsContext } from '../../GuestRooms/contexts/GuestRoomsContext';
import { Button } from '../Button';
import { css } from '@emotion/css';

const roomWrapperClassName = css`
  border-bottom: 1px solid #eff2f6;
  margin-bottom: 16px;
`;

export const GuestRooms = () => {
  const { getRooms, addRoom } = useContext(GuestRoomsContext);
  const rooms = getRooms();

  return (
    <div
      className={css`
        overflow-y: scroll;
        padding: 16px 16px 80px;
      `}
    >
      {rooms.map((room, index) => (
        <div key={room} className={roomWrapperClassName}>
          <GuestRoom room={room} index={index} />
        </div>
      ))}
      <Button variant="secondary" onClick={addRoom} fullWidth>
        + Add room
      </Button>
    </div>
  );
};

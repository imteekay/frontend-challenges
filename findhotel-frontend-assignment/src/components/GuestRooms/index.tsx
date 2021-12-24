import { FC, useContext } from 'react';
import { css } from '@emotion/css';
import { GuestRoom } from './GuestRoom';
import { GuestRoomsContext } from '../../GuestRooms/contexts/GuestRoomsContext';
import { Button } from '../Button';
import { getRooms } from '../../GuestRooms/contexts/getters';

const guestRoomsWrapperStyle = css`
  overflow-y: scroll;
  padding: 16px 16px 80px;
  flex-grow: 1;
`;

const roomWrapperStyle = css`
  border-bottom: 1px solid #eff2f6;
  margin-bottom: 16px;
`;

export const GuestRooms: FC = () => {
  const { guestRooms, addRoom } = useContext(GuestRoomsContext);
  const rooms = getRooms(guestRooms);

  return (
    <div className={guestRoomsWrapperStyle}>
      {rooms.map((_, index) => (
        <div
          key={`room-key-${index}`}
          className={roomWrapperStyle}
          data-testid={`room-key-${index}`}
        >
          <GuestRoom index={index} />
        </div>
      ))}
      <Button variant="secondary" onClick={addRoom} fullWidth>
        + Add room
      </Button>
    </div>
  );
};

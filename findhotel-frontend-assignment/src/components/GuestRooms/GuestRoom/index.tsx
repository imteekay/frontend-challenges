import { useContext } from 'react';
import { css } from '@emotion/css';
import { GuestRoomsContext } from '../../../GuestRooms/contexts/GuestRoomsContext';
import { Button } from '../../Button';
import { AdultsCountInput } from '../AdultsCountInput';
import { ChildrenCountInput } from '../ChildrenCountInput';
import { ChildrenSelect } from '../ChildrenSelect';

const roomTitleWrapperStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const roomTitleStyle = css`
  font-size: 18px;
  font-weight: 600;
`;

const countInputStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const childrenCountInputStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const removeButtonStyle = css`
  padding: 0;
  font-size: 16px;
  font-weight: 600;
`;

export const GuestRoom = ({ room = 'Room 1', index }) => {
  const { removeRoom } = useContext(GuestRoomsContext);
  const removeRoomOnClick = (room: string) => () => {
    removeRoom(room);
  };

  return (
    <>
      <div className={roomTitleWrapperStyle}>
        <h2 className={roomTitleStyle}>{room}</h2>
        {index ? (
          <Button
            variant="danger"
            onClick={removeRoomOnClick(room)}
            className={removeButtonStyle}
          >
            Remove room
          </Button>
        ) : null}
      </div>
      <div className={countInputStyle}>
        <span>Adults</span>
        <AdultsCountInput room={room} />
      </div>
      <div className={childrenCountInputStyle}>
        <span>Children</span>
        <ChildrenCountInput room={room} />
      </div>
      <ChildrenSelect room={room} />
    </>
  );
};

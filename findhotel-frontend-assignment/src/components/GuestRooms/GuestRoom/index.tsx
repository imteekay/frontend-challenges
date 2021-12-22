import { useContext } from 'react';
import { css } from '@emotion/css';
import { GuestRoomsContext } from '../../../GuestRooms/contexts/GuestRoomsContext';
import { Button } from '../../Button';
import { AdultsCountInput } from '../AdultsCountInput';
import { ChildrenCountInput } from '../ChildrenCountInput';
import { ChildrenSelect } from '../ChildrenSelect';

const roomTitleWrapperClassName = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const roomTitleClassName = css`
  font-size: 18px;
  font-weight: 600;
`;

const countInputClassName = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const childrenCountInputClassName = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const GuestRoom = ({ room = 'Room 1', index }) => {
  const { removeRoom } = useContext(GuestRoomsContext);
  const removeRoomOnClick = (room: string) => () => {
    removeRoom(room);
  };

  return (
    <>
      <div className={roomTitleWrapperClassName}>
        <h2 className={roomTitleClassName}>{room}</h2>
        {index ? (
          <Button
            variant="danger"
            onClick={removeRoomOnClick(room)}
            className={css`
              padding: 0;
              font-size: 16px;
              font-weight: 600;
            `}
          >
            Remove room
          </Button>
        ) : null}
      </div>
      <div className={countInputClassName}>
        <span>Adults</span>
        <AdultsCountInput room={room} />
      </div>
      <div className={childrenCountInputClassName}>
        <span>Children</span>
        <ChildrenCountInput room={room} />
      </div>
      <ChildrenSelect room={room} />
    </>
  );
};

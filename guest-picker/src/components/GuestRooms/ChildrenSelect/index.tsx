import { useContext } from 'react';
import { css } from '@emotion/css';
import { GuestRoomsContext } from '../../../GuestRooms/contexts/GuestRoomsContext';
import { CloseButton } from '../CloseButton';
import { getChildren } from '../../../GuestRooms/contexts/getters';
import { ChildSelect } from './ChildSelect';

type ChildrenSelectPropTypes = {
  roomIndex: number;
};

const childrenSelectWrapper = css`
  margin-left: 8px;
  padding-left: 16px;
  border-left: 1px solid #eff2f6;
`;

const childAgeSelectWrapper = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 15px;
`;

const selectWrapperStyle = css`
  width: 130px;
  display: flex;
`;

export const ChildrenSelect = ({ roomIndex }: ChildrenSelectPropTypes) => {
  const { guestRooms } = useContext(GuestRoomsContext);
  const chidren = getChildren(guestRooms, roomIndex);

  return (
    <div className={childrenSelectWrapper}>
      {chidren.map((child, index) => (
        <div
          className={childAgeSelectWrapper}
          key={`${roomIndex}-child-${index}`}
        >
          <span>Child {index + 1} age</span>
          <div className={selectWrapperStyle}>
            <ChildSelect child={child} roomIndex={roomIndex} index={index} />
            <CloseButton roomIndex={roomIndex} index={index} />
          </div>
        </div>
      ))}
    </div>
  );
};

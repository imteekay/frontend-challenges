import { css } from '@emotion/css';
import { AdultsCountInput } from '../AdultsCountInput';
import { ChildrenCountInput } from '../ChildrenCountInput';
import { ChildrenSelect } from '../ChildrenSelect';

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

export const GuestRoom = ({ room = 'Room 1' }) => (
  <>
    <h2 className={roomTitleClassName}>{room}</h2>
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

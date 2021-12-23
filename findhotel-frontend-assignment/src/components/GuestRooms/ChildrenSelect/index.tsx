import { ChangeEvent, useContext } from 'react';
import { css } from '@emotion/css';
import { GuestRoomsContext } from '../../../GuestRooms/contexts/GuestRoomsContext';
import { CloseButton } from '../CloseButton';

type ChildrenSelectPropTypes = {
  roomIndex: number;
};

const ageOptions = [...Array(18)];

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

const selectStyle = css`
  width: 100%;
  display: inline-flex;
  background: rgb(255, 255, 255);
  padding: 12px 40px 12px 16px;
  border: 1px solid rgb(190, 210, 233);
  border-radius: 4px;
  font-weight: 600;
  color: rgb(0, 0, 0);

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background-image: linear-gradient(
      45deg,
      transparent 50%,
      rgb(0, 113, 243) 50%
    ),
    linear-gradient(135deg, rgb(0, 113, 243) 50%, transparent 50%);
  background-position: calc(100% - 20px) calc(1em + 4px),
    calc(100% - 15px) calc(1em + 4px), calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
`;

export const ChildrenSelect = ({ roomIndex }: ChildrenSelectPropTypes) => {
  const { getChildren, updateChild } = useContext(GuestRoomsContext);
  const chidren = getChildren(roomIndex);

  const childAgeOnChange =
    (childIndex: number) => (event: ChangeEvent<HTMLSelectElement>) => {
      const childAge = Number(event.target.value);
      updateChild(roomIndex, childIndex, childAge);
    };

  return (
    <div className={childrenSelectWrapper}>
      {chidren.map((child, index) => (
        <div
          className={childAgeSelectWrapper}
          key={`${roomIndex}-child-${index}`}
        >
          <span>Child {index} age</span>
          <div className={selectWrapperStyle}>
            <select
              onChange={childAgeOnChange(index)}
              value={child.age}
              className={selectStyle}
            >
              {ageOptions.map((_, age) => (
                <option
                  value={age}
                  key={`${roomIndex}-child-${index}-age-option-${age}`}
                >
                  {age ? age : '<1'}
                </option>
              ))}
            </select>
            <CloseButton roomIndex={roomIndex} index={index} />
          </div>
        </div>
      ))}
    </div>
  );
};

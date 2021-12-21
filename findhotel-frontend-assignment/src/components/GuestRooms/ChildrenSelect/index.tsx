import { ChangeEvent, useContext } from 'react';
import { css } from '@emotion/css';
import { GuestRoomsContext } from '../../../GuestRooms/contexts/GuestRoomsContext';
import { CloseButton } from '../CloseButton';

type ChildrenSelectPropTypes = {
  room: string;
};

const ageOptions = [...Array(18)];

const selectWrapperClassName = css`
  width: 100px;
`;

const selectClassName = css`
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

export const ChildrenSelect = ({ room }: ChildrenSelectPropTypes) => {
  const { getChildren, updateChild } = useContext(GuestRoomsContext);
  const chidren = getChildren(room);

  const childAgeOnChange =
    (childIndex: number) => (event: ChangeEvent<HTMLSelectElement>) => {
      const childAge = Number(event.target.value);
      updateChild(room, childIndex, childAge);
    };

  return (
    <>
      {chidren.map((child, index) => (
        <div key={`${room}-child-${index}`} className={selectWrapperClassName}>
          <select
            onChange={childAgeOnChange(index)}
            value={child.age}
            className={selectClassName}
          >
            {ageOptions.map((_, age) => (
              <option
                value={age}
                key={`${room}-child-${index}-age-option-${age}`}
              >
                {age ? age : '<1'}
              </option>
            ))}
          </select>
          <CloseButton room={room} index={index} />
        </div>
      ))}
    </>
  );
};

import { ChangeEvent, FC, useContext } from 'react';
import { css } from '@emotion/css';
import { GuestRoomsContext } from '../../../GuestRooms/contexts/GuestRoomsContext';
import { Child } from '../../../GuestRooms/types/GuestRooms';

const ageOptions = [...Array(18)];

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

type ChildSelectPropTypes = {
  child: Child;
  roomIndex: number;
  index: number;
};

export const ChildSelect: FC<ChildSelectPropTypes> = ({
  child,
  roomIndex,
  index,
}) => {
  const { updateChild } = useContext(GuestRoomsContext);

  const childAgeOnChange =
    (childIndex: number) => (event: ChangeEvent<HTMLSelectElement>) => {
      const childAge = Number(event.target.value);
      updateChild(roomIndex, childIndex, childAge);
    };

  return (
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
  );
};

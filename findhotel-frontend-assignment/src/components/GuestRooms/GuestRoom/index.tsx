import { ChangeEvent, useContext } from 'react';
import { AdultsCountInput } from '../AdultsCountInput';
import { ChildrenCountInput } from '../ChildrenCountInput';
import { GuestRoomsContext } from '../../../GuestRooms/contexts/GuestRoomsContext';
import { CloseButton } from '../CloseButton';

const ageOptions = [...Array(18)];

export const GuestRoom = ({ room = 'Room 1' }) => {
  const { getChildren, updateChild } = useContext(GuestRoomsContext);

  const chidren = getChildren(room);

  const childAgeOnChange =
    (childIndex: number) => (event: ChangeEvent<HTMLSelectElement>) => {
      const childAge = Number(event.target.value);
      updateChild(room, childIndex, childAge);
    };

  return (
    <>
      <AdultsCountInput room={room} />
      <ChildrenCountInput room={room} />

      {chidren.map((child, index) => (
        <div key={`${room}-child-${index}`}>
          <select onChange={childAgeOnChange(index)} value={child.age}>
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

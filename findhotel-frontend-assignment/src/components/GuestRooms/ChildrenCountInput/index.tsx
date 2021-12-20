import { useContext } from 'react';
import { NumberInput } from '../../NumberInput';
import { GuestRoomsContext } from '../../../GuestRooms/contexts/GuestRoomsContext';

export const ChildrenCountInput = ({ room = 'Room 1' }) => {
  const { getChildrenCount, addChild, removeChild } =
    useContext(GuestRoomsContext);

  const childrenCount = getChildrenCount(room);

  const increaseValue = () => addChild(room);
  const decreaseValue = () => removeChild(room);

  return (
    <NumberInput
      value={childrenCount}
      increaseValue={increaseValue}
      decreaseValue={decreaseValue}
      minValue={0}
      maxValue={3}
    />
  );
};

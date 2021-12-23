import { FC, useContext } from 'react';
import { NumberInput } from '../../NumberInput';
import { GuestRoomsContext } from '../../../GuestRooms/contexts/GuestRoomsContext';

type ChildrenCountInputPropTypes = {
  roomIndex: number;
};

export const ChildrenCountInput: FC<ChildrenCountInputPropTypes> = ({
  roomIndex,
}) => {
  const { getChildrenCount, addChild, removeChild } =
    useContext(GuestRoomsContext);

  const childrenCount = getChildrenCount(roomIndex);

  const increaseValue = () => addChild(roomIndex);
  const decreaseValue = () => removeChild(roomIndex);

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

import { FC, useContext } from 'react';
import { NumberInput } from '../../NumberInput';
import { GuestRoomsContext } from '../../../GuestRooms/contexts/GuestRoomsContext';

type AdultsCountInputPropTypes = {
  roomIndex: number;
};

export const AdultsCountInput: FC<AdultsCountInputPropTypes> = ({
  roomIndex,
}) => {
  const { getAdultsCount, updateAdultsCount } = useContext(GuestRoomsContext);
  const adultsCount = getAdultsCount(roomIndex);

  const increaseValue = () => updateAdultsCount(roomIndex, adultsCount + 1);
  const decreaseValue = () => updateAdultsCount(roomIndex, adultsCount - 1);

  return (
    <NumberInput
      value={adultsCount}
      increaseValue={increaseValue}
      decreaseValue={decreaseValue}
      minValue={1}
      maxValue={5}
    />
  );
};

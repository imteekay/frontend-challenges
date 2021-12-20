import { useContext } from 'react';
import { NumberInput } from '../../NumberInput';
import { GuestRoomsContext } from '../../../GuestRooms/contexts/GuestRoomsContext';

export const AdultsCountInput = ({ room = 'Room 1' }) => {
  const { getAdultsCount, updateAdultsCount } = useContext(GuestRoomsContext);
  const adultsCount = getAdultsCount(room);

  const increaseValue = () => updateAdultsCount(room, adultsCount + 1);
  const decreaseValue = () => updateAdultsCount(room, adultsCount - 1);

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

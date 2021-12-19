import { useContext } from 'react';
import { GuestRoomsContext } from '../../../GuestRooms/contexts/GuestRoomsContext';
import { toGuestRoomsString } from '../../../GuestRooms/transformers/toGuestRoomsString';

function getRoomsCountText(roomsCount: number) {
  return roomsCount > 1 ? `${roomsCount} rooms` : `${roomsCount} room`;
}

function getGuestsCountText(guestsCount: number) {
  return guestsCount > 1 ? `${guestsCount} guests` : `${guestsCount} guest`;
}

export const SearchButton = () => {
  const { guestRooms, getRooms, getGuestsCount } =
    useContext(GuestRoomsContext);

  const rooms = getRooms();
  const roomsCountText = getRoomsCountText(rooms.length);
  const guestsCount = getGuestsCount();
  const guestsCountText = getGuestsCountText(guestsCount);

  const search = () => {
    console.log('guestRooms', guestRooms);
    console.log('guestRooms string', toGuestRoomsString(guestRooms));
  };

  return (
    <button onClick={search}>
      Search {roomsCountText} • {guestsCountText}
    </button>
  );
};

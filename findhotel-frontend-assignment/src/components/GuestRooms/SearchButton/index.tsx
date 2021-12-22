import { useContext } from 'react';
import { GuestRoomsContext } from '../../../GuestRooms/contexts/GuestRoomsContext';
import { toGuestRoomsString } from '../../../GuestRooms/transformers/toGuestRoomsString';
import { Button } from '../../Button';

function getRoomsCountText(roomsCount: number) {
  return roomsCount > 1 ? `${roomsCount} rooms` : `${roomsCount} room`;
}

function getGuestsCountText(guestsCount: number) {
  return guestsCount > 1 ? `${guestsCount} guests` : `${guestsCount} guest`;
}

function getPushState() {
  return (state, url: string) => window.history.pushState(state, '', url);
}

function search(guestRooms) {
  const pushState = getPushState();
  const guestRoomsString = toGuestRoomsString(guestRooms);

  return () =>
    pushState(
      { guestRooms: guestRoomsString },
      `?guestRooms="${guestRoomsString}"`
    );
}

export const SearchButton = () => {
  const { guestRooms, getRooms, getGuestsCount } =
    useContext(GuestRoomsContext);

  const rooms = getRooms();
  const roomsCountText = getRoomsCountText(rooms.length);
  const guestsCount = getGuestsCount();
  const guestsCountText = getGuestsCountText(guestsCount);

  return (
    <Button onClick={search(guestRooms)} fullWidth>
      Search {roomsCountText} • {guestsCountText}
    </Button>
  );
};

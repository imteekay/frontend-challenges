import { useContext } from 'react';
import { css, keyframes } from '@emotion/css';
import { GuestRoomsContext } from '../../../GuestRooms/contexts/GuestRoomsContext';
import { toGuestRoomsString } from '../../../GuestRooms/transformers/toGuestRoomsString';
import { Button } from '../../Button';
import { mediaQuery } from '../../../base/mediaQuery';

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

const overlayFade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const buttonWrapperStyle = css`
  padding: 16px;
  position: sticky;
  bottom: 0;

  animation-name: ${overlayFade};
  animation-duration: 0.9s;

  ${mediaQuery['sm']} {
    position: inherit;
    border-top: 1px solid #eff2f6;
    animation: none;
  }
`;

export const SearchButton = () => {
  const { guestRooms, getRooms, getGuestsCount } =
    useContext(GuestRoomsContext);

  const rooms = getRooms();
  const roomsCountText = getRoomsCountText(rooms.length);
  const guestsCount = getGuestsCount();
  const guestsCountText = getGuestsCountText(guestsCount);

  return (
    <div className={buttonWrapperStyle}>
      <Button onClick={search(guestRooms)} fullWidth>
        Search {roomsCountText} • {guestsCountText}
      </Button>
    </div>
  );
};

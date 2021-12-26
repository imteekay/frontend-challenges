import { FC, useContext } from 'react';
import { css, keyframes } from '@emotion/css';
import { GuestRoomsContext } from '../../../GuestRooms/contexts/GuestRoomsContext';
import { toGuestRoomsString } from '../../../GuestRooms/transformers/toGuestRoomsString';
import { Button } from '../../Button';
import { mediaQuery } from '../../../base/mediaQuery';
import { getGuestsCount, getRooms } from '../../../GuestRooms/contexts/getters';
import { GuestRooms } from '../../../GuestRooms/types/GuestRooms';
import { OnSearchFunction } from '../GuestRoomDialog';

function getRoomsCountText(roomsCount: number) {
  return roomsCount > 1 ? `${roomsCount} rooms` : `${roomsCount} room`;
}

function getGuestsCountText(guestsCount: number) {
  return guestsCount > 1 ? `${guestsCount} guests` : `${guestsCount} guest`;
}

function search(guestRooms: GuestRooms, callback: OnSearchFunction) {
  const guestRoomsString = toGuestRoomsString(guestRooms);

  return () =>
    callback(
      { guestRooms: guestRoomsString },
      `?guestRooms=${guestRoomsString}`
    );
}

const dialogFade = keyframes`
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

  animation-name: ${dialogFade};
  animation-duration: 0.9s;

  ${mediaQuery['sm']} {
    position: inherit;
    border-top: 1px solid #eff2f6;
    animation: none;
  }
`;

type SearchButtonPropTypes = {
  onSearch?: OnSearchFunction;
};

export const SearchButton: FC<SearchButtonPropTypes> = ({ onSearch }) => {
  const { guestRooms } = useContext(GuestRoomsContext);
  const rooms = getRooms(guestRooms);
  const roomsCountText = getRoomsCountText(rooms.length);
  const guestsCount = getGuestsCount(guestRooms);
  const guestsCountText = getGuestsCountText(guestsCount);

  return (
    <div className={buttonWrapperStyle}>
      <Button onClick={search(guestRooms, onSearch)} fullWidth>
        Search {roomsCountText} • {guestsCountText}
      </Button>
    </div>
  );
};

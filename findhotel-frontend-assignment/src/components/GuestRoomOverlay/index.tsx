import { FC } from 'react';
import { css } from '@emotion/css';
import { GuestRooms } from '../GuestRooms';
import { GuestRoomsProvider } from '../../GuestRooms/contexts/GuestRoomsContext';
import { SearchButton } from '../GuestRooms/SearchButton';
import { Header } from './Header';

const overlayClassName = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const modelClassName = css`
  display: flex;
  flex-direction: column;
  width: 400px;
  max-height: 65%;
  border-radius: 6px;
  box-shadow: rgb(42 51 61 / 16%) 0px 4px 10px 0px,
    rgb(42 51 61 / 11%) 0px 1px 4px 0px, rgb(42 51 61 / 14%) 0px 0px 1px 0px;
`;

type GuestRoomOverlayPropTypes = {
  guestRoomsString?: string;
};

export const GuestRoomOverlay: FC<GuestRoomOverlayPropTypes> = ({
  guestRoomsString = '1:0,13,16',
}) => (
  <GuestRoomsProvider guestRoomsString={guestRoomsString}>
    <div className={overlayClassName}>
      <div className={modelClassName}>
        <Header />
        <GuestRooms />
        <SearchButton />
      </div>
    </div>
  </GuestRoomsProvider>
);

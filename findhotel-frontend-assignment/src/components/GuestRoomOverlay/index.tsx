import { FC } from 'react';
import { css } from '@emotion/css';
import { GuestRooms } from '../GuestRooms';
import { GuestRoomsProvider } from '../../GuestRooms/contexts/GuestRoomsContext';
import { SearchButton } from '../GuestRooms/SearchButton';
import { Header } from './Header';

const overlayClassName = css`
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // height: 100%;
`;

const modelClassName = css`
  display: flex;
  flex-direction: column;
  position: relative;
  height: unset;
  width: 400px;
  left: 35%;
  top: 15%;
  max-height: 65%;
  border-radius: 6px;
  box-shadow: rgb(42 51 61 / 16%) 0px 4px 10px 0px,
    rgb(42 51 61 / 11%) 0px 1px 4px 0px, rgb(42 51 61 / 14%) 0px 0px 1px 0px;
  background-color: white;
`;

type GuestRoomOverlayPropTypes = {
  guestRoomsString?: string;
  onClose: () => void;
  open: boolean;
};

export const GuestRoomOverlay: FC<GuestRoomOverlayPropTypes> = ({
  guestRoomsString = '1:0,13,16',
  onClose,
  open = false,
}) =>
  open ? (
    <div
      className={css`
        inset: 0px;
        position: fixed;
        z-index: 111;
      `}
    >
      <div
        onClick={onClose}
        className={css`
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          z-index: -1;
          position: fixed;
          background: rgba(42, 51, 61, 0.6);
          opacity: 1;
          will-change: opacity;
          transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        `}
      />
      <GuestRoomsProvider guestRoomsString={guestRoomsString}>
        {/* <div className={overlayClassName}> */}
        <div className={modelClassName}>
          <Header onClose={onClose} />
          <GuestRooms />
          <SearchButton />
        </div>
        {/* </div> */}
      </GuestRoomsProvider>
    </div>
  ) : null;

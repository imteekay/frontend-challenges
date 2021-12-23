import { FC } from 'react';
import { css, keyframes } from '@emotion/css';
import { GuestRooms } from '../../GuestRooms';
import { GuestRoomsProvider } from '../../../GuestRooms/contexts/GuestRoomsContext';
import { SearchButton } from '../SearchButton';
import { Header } from '../Header';
import { mediaQuery } from '../../../base/mediaQuery';

const overlayFade = keyframes`
  from {
    top: 100%;
  }
  to {
    top: 0;
  }
`;

const modelStyle = css`
  display: flex;
  flex-direction: column;
  height: unset;
  background-color: white;
  position: fixed;
  inset: 0px;
  box-shadow: rgb(42 51 61 / 16%) 0px 4px 10px 0px,
    rgb(42 51 61 / 11%) 0px 1px 4px 0px, rgb(42 51 61 / 14%) 0px 0px 1px 0px;

  animation-name: ${overlayFade};
  animation-duration: 0.3s;

  ${mediaQuery['sm']} {
    position: relative;
    width: 400px;
    left: 20%;
    top: 15%;
    max-height: 65%;
    animation: none;
    border-radius: 6px;
  }

  ${mediaQuery['md']} {
    left: 20%;
  }

  ${mediaQuery['lg']} {
    left: 35%;
  }
`;

type OverlayPropTypes = {
  guestRoomsString?: string;
  onClose: () => void;
};

export const Overlay: FC<OverlayPropTypes> = ({
  guestRoomsString,
  onClose,
}) => (
  <GuestRoomsProvider guestRoomsString={guestRoomsString}>
    <div className={modelStyle}>
      <Header onClose={onClose} />
      <GuestRooms />
      <SearchButton />
    </div>
  </GuestRoomsProvider>
);

import { FC } from 'react';
import { css } from '@emotion/css';
import { BrowserView } from 'react-device-detect';
import { Overlay } from '../Overlay';

const overlayStyle = css`
  inset: 0px;
  position: fixed;
  z-index: 111;
`;

const backdropStyle = css`
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
`;

type OverlayBrowserViewPropTypes = {
  guestRoomsString?: string;
  onClose: () => void;
};

export const OverlayBrowserView: FC<OverlayBrowserViewPropTypes> = ({
  guestRoomsString,
  onClose,
}) => (
  <BrowserView>
    <div className={overlayStyle}>
      <div onClick={onClose} className={backdropStyle} />
      <Overlay guestRoomsString={guestRoomsString} onClose={onClose} />
    </div>
  </BrowserView>
);

import { FC } from 'react';
import { OverlayBrowserView } from './OverlayBrowserView';
import { OverlayMobileView } from './OverlayMobileView';

type GuestRoomOverlayPropTypes = {
  guestRoomsString?: string;
  onClose: () => void;
  open: boolean;
};

export const GuestRoomOverlay: FC<GuestRoomOverlayPropTypes> = ({
  guestRoomsString,
  onClose,
  open = false,
}) =>
  open ? (
    <>
      <OverlayBrowserView
        guestRoomsString={guestRoomsString}
        onClose={onClose}
      />
      <OverlayMobileView
        guestRoomsString={guestRoomsString}
        onClose={onClose}
      />
    </>
  ) : null;

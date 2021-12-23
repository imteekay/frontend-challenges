import { FC } from 'react';
import { MobileView } from 'react-device-detect';
import { Overlay } from '../Overlay';

type OverlayMobileViewPropTypes = {
  guestRoomsString?: string;
  onClose: () => void;
};

export const OverlayMobileView: FC<OverlayMobileViewPropTypes> = ({
  guestRoomsString,
  onClose,
}) => (
  <MobileView>
    <Overlay guestRoomsString={guestRoomsString} onClose={onClose} />
  </MobileView>
);

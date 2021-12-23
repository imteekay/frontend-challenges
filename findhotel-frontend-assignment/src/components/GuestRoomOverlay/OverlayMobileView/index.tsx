import { FC } from 'react';
import { MobileView } from 'react-device-detect';
import { Overlay } from '../Overlay';
import { OnSearchFunction } from '..';

type OverlayMobileViewPropTypes = {
  guestRoomsString?: string;
  onClose: () => void;
  onSearch?: OnSearchFunction;
};

export const OverlayMobileView: FC<OverlayMobileViewPropTypes> = ({
  guestRoomsString,
  onClose,
  onSearch,
}) => (
  <MobileView>
    <Overlay
      guestRoomsString={guestRoomsString}
      onClose={onClose}
      onSearch={onSearch}
    />
  </MobileView>
);

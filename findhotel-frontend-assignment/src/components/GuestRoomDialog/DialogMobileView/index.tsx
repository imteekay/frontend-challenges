import { FC } from 'react';
import { MobileView } from 'react-device-detect';
import { Dialog } from '../Dialog';
import { OnSearchFunction } from '..';

type DialogMobileViewPropTypes = {
  guestRoomsString?: string;
  onClose: () => void;
  onSearch?: OnSearchFunction;
};

export const DialogMobileView: FC<DialogMobileViewPropTypes> = ({
  guestRoomsString,
  onClose,
  onSearch,
}) => (
  <MobileView>
    <Dialog
      guestRoomsString={guestRoomsString}
      onClose={onClose}
      onSearch={onSearch}
    />
  </MobileView>
);

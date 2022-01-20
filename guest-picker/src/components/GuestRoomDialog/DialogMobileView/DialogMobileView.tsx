import { FC } from 'react';
import { Dialog } from '../Dialog';
import { OnSearchFunction } from '../GuestRoomDialog';

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
  <Dialog
    guestRoomsString={guestRoomsString}
    onClose={onClose}
    onSearch={onSearch}
  />
);

export default DialogMobileView;

import { FC } from 'react';
import { DialogBrowserView } from './DialogBrowserView';
import { DialogMobileView } from './DialogMobileView';
import { PushStateSignature } from '../../base/pushState';

type NoArgumentVoidFunctionSignature = () => void;

export type OnSearchFunction =
  | PushStateSignature
  | NoArgumentVoidFunctionSignature;

type GuestRoomDialogPropTypes = {
  guestRoomsString?: string;
  open: boolean;
  onClose: () => void;
  onSearch?: OnSearchFunction;
};

export const GuestRoomDialog: FC<GuestRoomDialogPropTypes> = ({
  guestRoomsString,
  open = false,
  onClose,
  onSearch,
}) =>
  open ? (
    <>
      <DialogBrowserView
        guestRoomsString={guestRoomsString}
        onClose={onClose}
        onSearch={onSearch}
      />
      <DialogMobileView
        guestRoomsString={guestRoomsString}
        onClose={onClose}
        onSearch={onSearch}
      />
    </>
  ) : null;

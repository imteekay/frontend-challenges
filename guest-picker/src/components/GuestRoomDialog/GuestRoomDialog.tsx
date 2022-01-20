import { FC } from 'react';
import { MobileView, BrowserView } from 'react-device-detect';
import DialogBrowserView from './DialogBrowserView';
import DialogMobileView from './DialogMobileView';
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
      <BrowserView>
        <DialogBrowserView
          guestRoomsString={guestRoomsString}
          onClose={onClose}
          onSearch={onSearch}
        />
      </BrowserView>
      <MobileView>
        <DialogMobileView
          guestRoomsString={guestRoomsString}
          onClose={onClose}
          onSearch={onSearch}
        />
      </MobileView>
    </>
  ) : null;

export default GuestRoomDialog;

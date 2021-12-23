import { FC } from 'react';
import { OverlayBrowserView } from './OverlayBrowserView';
import { OverlayMobileView } from './OverlayMobileView';
import { PushStateSignature } from '../../base/pushState';

type NoArgumentVoidFunctionSignature = () => void;

export type OnSearchFunction =
  | PushStateSignature
  | NoArgumentVoidFunctionSignature;

type GuestRoomOverlayPropTypes = {
  guestRoomsString?: string;
  open: boolean;
  onClose: () => void;
  onSearch?: OnSearchFunction;
};

export const GuestRoomOverlay: FC<GuestRoomOverlayPropTypes> = ({
  guestRoomsString,
  open = false,
  onClose,
  onSearch,
}) =>
  open ? (
    <>
      <OverlayBrowserView
        guestRoomsString={guestRoomsString}
        onClose={onClose}
        onSearch={onSearch}
      />
      <OverlayMobileView
        guestRoomsString={guestRoomsString}
        onClose={onClose}
        onSearch={onSearch}
      />
    </>
  ) : null;

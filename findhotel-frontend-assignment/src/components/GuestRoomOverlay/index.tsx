import { FC } from 'react';
import { css } from '@emotion/css';
import { GuestRooms } from '../GuestRooms';
import { GuestRoomsProvider } from '../../GuestRooms/contexts/GuestRoomsContext';
import { SearchButton } from '../GuestRooms/SearchButton';
import { Button } from '../Button';
import { ReactComponent as CloseIcon } from '../Icons/close.svg';

const overlayClassName = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const modelClassName = css`
  display: flex;
  flex-direction: column;
  width: 400px;
  max-height: 65%;
  border-radius: 6px;
  box-shadow: rgb(42 51 61 / 16%) 0px 4px 10px 0px,
    rgb(42 51 61 / 11%) 0px 1px 4px 0px, rgb(42 51 61 / 14%) 0px 0px 1px 0px;
`;

type GuestRoomOverlayPropTypes = {
  guestRoomsString?: string;
};

export const GuestRoomOverlay: FC<GuestRoomOverlayPropTypes> = ({
  guestRoomsString = '1:0,13,16',
}) => (
  <div className={overlayClassName}>
    <GuestRoomsProvider guestRoomsString={guestRoomsString}>
      <div className={modelClassName}>
        <div
          className={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px 16px;
            border-bottom: 1px solid #eff2f6;
          `}
        >
          <header
            className={css`
              font-weight: 700;
              font-size: 21px;
            `}
          >
            Rooms & Guests
          </header>
          <Button
            variant="close"
            onClick={() => {}}
            className={css`
              padding: 0;
            `}
          >
            <CloseIcon />
          </Button>
        </div>
        <GuestRooms />

        <div
          className={css`
            padding: 16px;
            border-top: 1px solid #eff2f6;
          `}
        >
          <SearchButton />
        </div>
      </div>
    </GuestRoomsProvider>
  </div>
);

import { FC, useContext } from 'react';
import { css } from '@emotion/css';
import { GuestRoomsContext } from '../../../GuestRooms/contexts/GuestRoomsContext';
import { Button } from '../../Button';
import { ReactComponent as CloseIcon } from '../../Icons/close.svg';

type CloseButtonPropTypes = {
  roomIndex: number;
  index: number;
};

export const CloseButton: FC<CloseButtonPropTypes> = ({ roomIndex, index }) => {
  const { removeChild } = useContext(GuestRoomsContext);

  const removeOnClick = (childIndex: number) => () => {
    removeChild(roomIndex, childIndex);
  };

  return (
    <Button
      variant="danger"
      onClick={removeOnClick(index)}
      dataTestid={`close-button-${index}`}
      className={css`
        padding: 8px;
      `}
    >
      <CloseIcon />
    </Button>
  );
};

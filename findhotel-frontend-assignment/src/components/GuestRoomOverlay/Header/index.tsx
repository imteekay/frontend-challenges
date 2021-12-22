import { FC } from 'react';
import { css } from '@emotion/css';
import { Button } from '../../Button';
import { ReactComponent as CloseIcon } from '../../Icons/close.svg';

export const Header: FC = () => {
  return (
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
  );
};

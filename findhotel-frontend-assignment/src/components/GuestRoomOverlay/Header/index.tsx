import { FC } from 'react';
import { css } from '@emotion/css';
import { Button } from '../../Button';
import { ReactComponent as CloseIcon } from '../../Icons/close.svg';

type HeaderPropTypes = {
  onClose: () => void;
};

const headerWrapperClassName = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 16px;
  border-bottom: 1px solid #eff2f6;
`;

const headerClassName = css`
  font-weight: 700;
  font-size: 21px;
`;

const buttonClassName = css`
  padding: 0;
`;

export const Header: FC<HeaderPropTypes> = ({ onClose }) => (
  <div className={headerWrapperClassName}>
    <header className={headerClassName}>Rooms & Guests</header>
    <Button variant="close" onClick={onClose} className={buttonClassName}>
      <CloseIcon />
    </Button>
  </div>
);

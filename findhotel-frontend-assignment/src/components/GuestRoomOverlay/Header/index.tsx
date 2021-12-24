import { FC } from 'react';
import { css } from '@emotion/css';
import { Button } from '../../Button';
import { ReactComponent as CloseIcon } from '../../Icons/close.svg';
import { mediaQuery } from '../../../base/mediaQuery';

type HeaderPropTypes = {
  onClose: () => void;
};

const headerWrapperStyle = css`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: white;
  box-shadow: rgb(42 51 61 / 20%) 0px 1px 4px 0px,
    rgb(42 51 61 / 8%) 0px 0px 1px 0px;
  display: flex;
  align-items: center;
  padding: 20px 16px;

  ${mediaQuery['sm']} {
    border-bottom: 1px solid #eff2f6;
    box-shadow: none;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    justify-content: space-between;
  }
`;

const headerStyle = css`
  font-weight: 700;
  font-size: 16px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  ${mediaQuery['sm']} {
    font-size: 21px;
    justify-content: space-between;
  }
`;

const buttonStyle = css`
  padding: 0;
  position: absolute;
  top: 16px;
  left: 12px;

  ${mediaQuery['sm']} {
    position: relative;
    top: inherit;
    left: inherit;
  }
`;

export const Header: FC<HeaderPropTypes> = ({ onClose }) => (
  <div className={headerWrapperStyle}>
    <div className={headerStyle}>
      <span>Rooms & Guests</span>
    </div>
    <Button
      variant="close"
      onClick={onClose}
      className={buttonStyle}
      dataTestid="overlay-close-button"
    >
      <CloseIcon />
    </Button>
  </div>
);

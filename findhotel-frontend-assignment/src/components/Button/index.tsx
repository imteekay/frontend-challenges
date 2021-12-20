import { FC } from 'react';
import { css } from '@emotion/css';

type ButtonVariants = 'primary' | 'secondary';

type ButtonPropTypes = {
  disabled?: boolean;
  onClick: () => void;
  variant?: ButtonVariants;
};

const Colors = {
  primary: 'white',
  secondary: '#0071f3',
};

const BackgroundColors = {
  primary: '#0071f3',
  secondary: '#f7fbff',
};

const BackgroundColorsHover = {
  primary: '#0064d8',
  secondary: '#e4f0fe',
};

const BoxShadow = {
  primary: 'none',
  secondary: 'rgb(191 218 249) 0px 0px 0px 1px inset',
};

export const Button: FC<ButtonPropTypes> = ({
  children,
  disabled = false,
  onClick,
  variant = 'primary',
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={css`
        display: inline-flex;
        border: 0px;
        border-radius: 6px;
        margin: 0px;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        text-align: center;
        vertical-align: middle;
        position: relative;
        text-decoration: none;
        font-size: 16px;
        font-weight: 600;
        padding: 16px 32px;
        color: ${Colors[variant]};
        background-color: ${BackgroundColors[variant]};
        box-shadow: ${BoxShadow[variant]};
        &:hover {
          background-color: ${BackgroundColorsHover[variant]};
        }
      `}
    >
      {children}
    </button>
  );
};

import { FC } from 'react';
import { css } from '@emotion/css';

type ButtonVariants = 'primary' | 'secondary' | 'disabled' | 'danger';

type ButtonPropTypes = {
  disabled?: boolean;
  onClick: () => void;
  variant?: ButtonVariants;
};

const Cursor = {
  primary: 'pointer',
  secondary: 'pointer',
  disabled: 'not-allowed',
  danger: 'pointer',
};

const Colors = {
  primary: 'white',
  secondary: '#0071f3',
  disabled: '#6a7886',
  danger: 'rgb(216, 59, 59)',
};

const BackgroundColors = {
  primary: '#0071f3',
  secondary: '#f7fbff',
  disabled: '#eff2F6',
  danger: 'rgba(255, 255, 255, 0)',
};

const BackgroundColorsHover = {
  primary: '#0064d8',
  secondary: '#e4f0fe',
  disabled: '#eff2F6',
  danger: 'rgba(255, 255, 255, 0)',
};

const BoxShadow = {
  primary: 'none',
  secondary: '#bfdaf9 0px 0px 0px 1px inset',
  disabled: 'none',
  danger: 'none',
};

export const Button: FC<ButtonPropTypes> = ({
  children,
  disabled = false,
  onClick,
  variant = 'primary',
}) => {
  console.log('variant', variant);
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={css`
        display: inline-flex;
        border: 0px;
        border-radius: 6px;
        margin: 0px;
        cursor: ${Cursor[variant]};
        align-items: center;
        justify-content: center;
        text-align: center;
        vertical-align: middle;
        position: relative;
        text-decoration: none;
        font-size: 16px;
        font-weight: 600;
        padding: ${variant === 'danger' ? '8px' : '16px 32px'};
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

import { FC } from 'react';

type ButtonPropTypes = {
  disabled?: boolean;
  onClick: () => void;
};

export const Button: FC<ButtonPropTypes> = ({
  children,
  disabled = false,
  onClick,
}) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

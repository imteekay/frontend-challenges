import { FC } from 'react';
import { css } from '@emotion/css';
import { Button } from '../Button';
import { ReactComponent as PlusIcon } from '../Icons/plus.svg';
import { ReactComponent as MinusIcon } from '../Icons/minus.svg';

type NumberInputPropTypes = {
  value: number;
  increaseValue: () => void;
  decreaseValue: () => void;
  minValue: number;
  maxValue: number;
};

export const NumberInput: FC<NumberInputPropTypes> = ({
  value,
  increaseValue,
  decreaseValue,
  minValue,
  maxValue,
}) => {
  const isAbleToDecreaseValue = value > minValue;
  const isAbleToIncreaseValue = value < maxValue;

  const isDecreaseDisabled = value === minValue;
  const isIncreaseDisabled = value === maxValue;

  const decreaseNumber = () => isAbleToDecreaseValue && decreaseValue();
  const increaseNumber = () => isAbleToIncreaseValue && increaseValue();

  const decreaseButtonVariant = isDecreaseDisabled ? 'disabled' : 'secondary';
  const increaseButtonVariant = isIncreaseDisabled ? 'disabled' : 'secondary';

  return (
    <div>
      <Button
        disabled={isDecreaseDisabled}
        onClick={decreaseNumber}
        variant={decreaseButtonVariant}
        dataTestid="minus-button"
        className={css`
          padding: 8px;
          margin-right: 24px;
        `}
      >
        <MinusIcon />
      </Button>
      <span
        className={css`
          width: 10px;
          display: inline-block;
        `}
      >
        {value}
      </span>
      <Button
        disabled={isIncreaseDisabled}
        onClick={increaseNumber}
        variant={increaseButtonVariant}
        dataTestid="plus-button"
        className={css`
          padding: 8px;
          margin-left: 24px;
        `}
      >
        <PlusIcon />
      </Button>
    </div>
  );
};

import { css } from '@emotion/css';
import { Button } from '../Button';
import { ReactComponent as PlusIcon } from '../Icons/plus.svg';
import { ReactComponent as MinusIcon } from '../Icons/minus.svg';

export const NumberInput = ({
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
    <>
      <Button
        disabled={isDecreaseDisabled}
        onClick={decreaseNumber}
        variant={decreaseButtonVariant}
        className={css`
          padding: 8px;
        `}
      >
        <MinusIcon />
      </Button>
      {value}
      <Button
        disabled={isIncreaseDisabled}
        onClick={increaseNumber}
        variant={increaseButtonVariant}
        className={css`
          padding: 8px;
        `}
      >
        <PlusIcon />
      </Button>
    </>
  );
};

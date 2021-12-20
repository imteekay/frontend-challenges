import { Button } from '../Button';

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

  return (
    <>
      <Button
        disabled={isDecreaseDisabled}
        onClick={decreaseNumber}
        variant="secondary"
      >
        -
      </Button>
      {value}
      <Button
        disabled={isIncreaseDisabled}
        onClick={increaseNumber}
        variant="secondary"
      >
        +
      </Button>
    </>
  );
};

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
      <button disabled={isDecreaseDisabled} onClick={decreaseNumber}>
        -
      </button>
      {value}
      <button disabled={isIncreaseDisabled} onClick={increaseNumber}>
        +
      </button>
    </>
  );
};

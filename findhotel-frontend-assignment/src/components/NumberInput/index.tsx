import React, { useCallback } from 'react';

export const NumberInput = ({ value, updateValue, minValue, maxValue }) => {
  const isAbleToDecreaseValue = value > minValue;
  const isAbleToIncreaseValue = value < maxValue;

  const decreaseNumber = useCallback(
    () => isAbleToDecreaseValue && updateValue(value - 1),
    [value, updateValue, isAbleToDecreaseValue]
  );

  const increaseNumber = useCallback(
    () => isAbleToIncreaseValue && updateValue(value + 1),
    [value, updateValue, isAbleToIncreaseValue]
  );

  const isDecreaseDisabled = value === minValue;
  const isIncreaseDisabled = value === maxValue;

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

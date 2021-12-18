import React, { useCallback } from 'react';

export const NumberInput = ({ value, updateValue }) => {
  const decreaseNumber = useCallback(
    () => updateValue(value && value - 1),
    [value, updateValue]
  );

  const increaseNumber = useCallback(
    () => updateValue(value + 1),
    [value, updateValue]
  );

  const isDecreaseDisabled = value === 0;

  return (
    <>
      <button disabled={isDecreaseDisabled} onClick={decreaseNumber}>
        -
      </button>
      {value}
      <button onClick={increaseNumber}>+</button>
    </>
  );
};

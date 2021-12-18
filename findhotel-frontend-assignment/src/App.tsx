import React, { useState } from 'react';
import { NumberInput } from './components/NumberInput';
import './App.css';

function App() {
  const [numberValue, setNumberValue] = useState(1);

  return (
    <div className="App">
      <NumberInput
        value={numberValue}
        updateValue={setNumberValue}
        minValue={1}
        maxValue={5}
      />
    </div>
  );
}

export default App;

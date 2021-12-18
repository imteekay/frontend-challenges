import React, { useState } from 'react';
import { NumberInput } from './components/NumberInput';
import './App.css';

function App() {
  const [numberValue, setNumberValue] = useState(0);

  return (
    <div className="App">
      <NumberInput value={numberValue} updateValue={setNumberValue} />
    </div>
  );
}

export default App;

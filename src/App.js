import React, { useState } from 'react';

const App = () => {

  const [tempValue, setTempValue] = useState(15);
  const [tempColour, setTempColour] = useState("cold");

  const increment = () => {
    const newTemp = tempValue + 1;
    if(newTemp <= 15){
      setTempColour('cold');
    }
    if(newTemp > 15){
      setTempColour('hot');
    }
    setTempValue(newTemp);
  }

  const decrement = () => {
    const newTemp = tempValue - 1;
    if(newTemp <= 15){
      setTempColour('cold');
    }
    if(newTemp > 15){
      setTempColour('hot');
    }
    setTempValue(newTemp);
  }

  return (
    <div className="App">
      <div className='container'>
        <h1>Thermostat</h1>
        <div className={`temp-display ${tempColour}`}>{ tempValue }°C</div>
        
        <div className='btn-container'>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>

      </div>
    </div>
  );
}

export default App;

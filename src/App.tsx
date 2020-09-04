import React, {useState} from 'react';
import './App.css';
import Tablo from './Components/Tablo/Tablo';
import ButtonsGroup from './Components/ButtonGroup/ButtonsGroup';
import Settings from './Components/Settings/Settings';

function App() {

  
  let [maxValue, setMaxValue] = useState(1);
  let [startValue, setStartValue] = useState(0);
  let [count, setCount] = useState(startValue);
  let [error, setError] = useState("");
  let [isChange, setIsChange] = useState(false)

  function inc () {
    
    if (count<maxValue) {
    setCount(count+1)
    }
  }

  function reset () {
    setCount(startValue)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Settings setMaxValue={setMaxValue}
                  setStartValue={setStartValue}
                  setCount={setCount}
                  error={error}
                  setError={setError}
                  maxValue={maxValue}
                  setIsChange={setIsChange} />
        <Tablo state={count}
                maxValue={maxValue}
                error={error} />
        <ButtonsGroup 
                state={count}
                inc={inc}
                reset={reset}
                maxValue={maxValue}
                startValue={startValue}
                isChange={isChange} />

      </header>
    </div>
  );
}

export default App;

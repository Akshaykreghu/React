import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

const Counter = () => {
  const [step, setStepValue] = useState(1);
  const handleStepValue = (stepValue) => {
    if(Math.abs(step) >= 0 && Math.abs(step) <= 10){
      setStepValue(Math.abs(stepValue));
    }
  };

  return (
    <div>
      <Steps handleStepValue={handleStepValue} step={step} />
      <Count stepValue={step} setStepValue={setStepValue}/>
    </div>
  );
};

const Steps = ({ handleStepValue, step }) => {
  return (
    <div>
      Step: {step}{" "}
      <input
        type="range"
        min={0}
        max={10}
        value={step}
        onChange={(e) => handleStepValue(e.target.value)}
      />
    </div>
  );
};

const Count = ({ stepValue, setStepValue }) => {
  const [count, changeCount] = useState(0);
  const currentDate = new Date();
  const handleInput = (value) => {
    changeCount(Math.abs(value));
  };
  const handleReset =() =>{
    setStepValue(1);
    changeCount(1);

  }
  currentDate.setDate(currentDate.getDate() + count);

  return (
    <div style={{ alignItems: "center" }}>
      <div>
        <button onClick={() => changeCount(count - stepValue)}>-</button>{" "}
        <input
          type="number"
          value={count}
          style={{ textAlign: "center" }}
          onChange={(e) => handleInput(e.target.value)}
        />{" "}
        <button onClick={() => changeCount(count + stepValue)}>+</button>
      </div>
      <p>
        {count === 1
          ? `${count} day from ${currentDate.toDateString()}`
          : count === 0
          ? `Today is ${currentDate.toDateString()}`
          : count < 0
          ? `${Math.abs(count)} days ago ${currentDate.toDateString()}`
          : `${count} days from ${currentDate.toDateString()}`}
      </p>
      {(Number(count)!==0 || Number(stepValue) !== 1) && <div><button onClick={()=> handleReset()}>Reset</button></div>}
    </div>
  );
};

export default App;

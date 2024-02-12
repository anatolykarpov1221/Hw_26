import React, { useState } from 'react';

const StepCounter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => {
    setCount(prevCount => prevCount + step);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - step);
  };

  const changeStep = (newStep: React.SetStateAction<number>) => {
    setStep(newStep);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Step: {step}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={() => changeStep(step + 1)}>+ Step</button>
      <button onClick={() => changeStep(step - 1)}>- Step</button>
    </div>
  );
};

export default StepCounter;

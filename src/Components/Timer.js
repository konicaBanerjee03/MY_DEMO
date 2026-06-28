import React, { useState, useEffect } from "react";

function Fourth() {
  const [count, setCount] = useState(0);       // Timer display
  const [inputValue, setInputValue] = useState(""); // User input seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && count > 0) {
      timer = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);
    } else if (count === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, count]);

  const handleStart = () => {
    if (inputValue && !isNaN(inputValue)) {
      setCount(Number(inputValue));
      setIsRunning(true);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setCount(0);
    setInputValue("");
  };

  return (
    <div>
      <h1>{count}</h1>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter seconds"
      />
      <button onClick={handleStart}>Start</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Fourth;

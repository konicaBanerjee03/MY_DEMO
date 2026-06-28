import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0); // time in seconds
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running]);

  const handleStart = () => setRunning(true);
  const handleStop = () => setRunning(false);
  const handleReset = () => {
    setRunning(false);
    setTime(0);
  };

  // Convert seconds → hh:mm:ss
  const formatTime = (time) => {
    const hrs = String(Math.floor(time / 3600)).padStart(2, "0");
    const mins = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
    const secs = String(time % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>⏱ Stopwatch</h1>
      <h2>{formatTime(time)}</h2>
      <button onClick={handleStart} disabled={running}>Start</button>
      <button onClick={handleStop} disabled={!running}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Stopwatch;

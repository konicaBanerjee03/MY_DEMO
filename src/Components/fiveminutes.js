import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes = 300 seconds

  useEffect(() => {
    // stop when timer ends
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // format time mm:ss
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Auto Counter</h1>

      <h2>Count: {count}</h2>

      <h3>
        Time Left: {minutes}:{seconds }
      </h3>

      {timeLeft === 0 && <h2>Counter Stopped After 5 Minutes</h2>}
    </div>
  );
}

export default App;
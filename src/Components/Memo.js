
import React, { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function expensiveCalculation(num) {
    console.log("Calculating...");
    return num * 2;
  }

  const result = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  return (
    <>
      <h2>Count: {count}</h2>
      <h2>Result: {result}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <br />
      <br />

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here"
      />
    </>
  );
}

export default App;
// import React, { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   function expensiveCalculation(num) {
//     console.log("Calculating...");
//     return num * 2;
//   }

//   const result = expensiveCalculation(count);

//   return (
//     <>
//       <h2>Count: {count}</h2>
//       <h2>Result: {result}</h2>

//       <button onClick={() => setCount(count + 1)}>
//         Increment
//       </button>

//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Type here"
//       />
//     </>
//   );
// }

// export default App;


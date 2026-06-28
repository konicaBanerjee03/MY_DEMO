import React, { useState } from "react";

function Check() {
  // Initialize arr as an array of objects with `task` and `checked` properties
  const initialItems = [
    { task: "play Cricket", checked: false },
    { task: "play video game", checked: false },
    { task: "read book", checked: false }
  ];

  const [state, setState] = useState(initialItems);

  const handleDelete = (index) => {
    const updatedList = state.filter((_, i) => i !== index);
    setState(updatedList); // Update state to remove the item
  };

  const handleCheck = (index) => {
    const updatedItems = state.map((item, i) =>
      i === index ? { ...item, checked: !item.checked } : item
    );
    setState(updatedItems); // Toggle the checked state
  };

  return (
    <div>
      <h1>LIST</h1>
      <ul>
        {state.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheck(index)}
            />
            {item.task}
            <button onClick={() => handleDelete(index)}>Delete item</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Check;

import React, { useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    if (input.trim() === "") return;

    setTodo([...todo, input]);
    setInput("");
  };

  const handleDelete = (index) => {
    const updatedTodo = todo.filter((_, i) => i !== index);
    setTodo(updatedTodo);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditText(todo[index]);
  };

  const handleSave = () => {
    const updatedTodo = todo.map((item, i) =>
      i === editIndex ? editText.trim() : item
    );

    setTodo(updatedTodo);
    setEditIndex(null);
    setEditText("");
  };

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add</button>

      <ul>
        {todo.map((item, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={handleSave}>Save</button>
              </>
            ) : (
              <>
                {item}
                <button onClick={() => handleDelete(index)}>
                  Delete
                </button>
                <button onClick={() => handleEdit(index)}>
                  Edit
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
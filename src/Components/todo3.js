import React,{useState}from "react";
function App(){
  const[todo,setTodo]=useState([]);
  const[input,setInput]=useState("");
  const handleChange=(e)=>{
    setInput(e.target.value)
  }
  const handleAdd=()=>{
    setTodo([...todo,
      
      {text:input,
      status:" "}])
  }
  const handleSelected=(index,status)=>{
    const updatedtodo=[...todo]
    updatedtodo[index].status=status
    setTodo(updatedtodo)
  }

  return (
    <>
    <input type="text" value={input}  onChange={handleChange}/>
    <button onClick={handleAdd}>Add</button>
    {todo.map((i,index)=>(
      <li key={index}>{i.text}
      <button onClick={()=>handleSelected(index,"completed")}>completed</button>
      <button onClick={()=>handleSelected(index,"pending")}>pending</button>
      <button onClick={()=>handleSelected(index,"rejected")}>Rejected</button>
      </li>
    ))}

    <table>
      <th>
        <tr>completed</tr>
        </th>
        <th>
          pending
          </th>
          <th>
        Rejected
          </th>
          <tr>
            <td>
              {todo.filter((i)=>i.status==="completed").map((i,index)=>(
                <div key={index}>{i.text}</div>
              ))}
            </td>
            <td>
              {todo.filter((i)=>i.status==="pending").map((i,index)=>(
                <div key={index}>{i.text}</div>
              ))}
            </td>
            <td>
              {todo.filter((i)=>i.status==="rejected").map((i,index)=>(
                <div key={index}>{i.text}</div>
              ))}
            </td>
          </tr>
      </table>
    </>
  )
}
export default App;



//using without obj
import React, { useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    setTodo([...todo, [input, ""]]); // [task, status]
    setInput("");
  };

  const handleDelete = (index) => {
    setTodo(todo.filter((_, i) => i !== index));
  };

  const handleSelected = (index, status) => {
    const updatedTodo = [...todo];
    updatedTodo[index][1] = status;
    setTodo(updatedTodo);
  };

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todo.map((item, index) => (
          <li key={index}>
            {item[0]}
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => handleSelected(index, "completed")}>
              Completed
            </button>
            <button onClick={() => handleSelected(index, "pending")}>
              Pending
            </button>
            <button onClick={() => handleSelected(index, "rejected")}>
              Rejected
            </button>
          </li>
        ))}
      </ul>

      <table border="1">
        <thead>
          <tr>
            <th>Completed</th>
            <th>Pending</th>
            <th>Rejected</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {todo
                .filter((item) => item[1] === "completed")
                .map((item, index) => (
                  <div key={index}>{item[0]}</div>
                ))}
            </td>

            <td>
              {todo
                .filter((item) => item[1] === "pending")
                .map((item, index) => (
                  <div key={index}>{item[0]}</div>
                ))}
            </td>

            <td>
              {todo
                .filter((item) => item[1] === "rejected")
                .map((item, index) => (
                  <div key={index}>{item[0]}</div>
                ))}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
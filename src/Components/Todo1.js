import React,{useState} from "react";

function Todo(){
    const[todos, setTodos]=useState([]);
    const[input, setInput]=useState('');

    const handleInput=(e)=>{
        setInput(e.target.value)
    };

    const handleAdd=()=>{
        if(input.trim()){
        setTodos([...todos,input])
    }
};
    const handleRemove=(index)=>{
     const ntodo=   todos.filter((_,i)=>i!==index)
     setTodos(ntodo)

    }

    return(
        <div>
            <h1>MY-TO-DO_LIST</h1>
            <input type="text" value={input}  onChange={handleInput}></input>
            <button onClick={handleAdd}>Add</button>
            <ul>
                {todos.map((todo,index)=>(
                    <li key={index}>
                        {todo}
                        <button onClick={()=>handleRemove(index)}>Delete</button>

                    </li>
                ))}
            </ul>
            
        </div>

    )
}

export default Todo;



// import React, { useState } from "react";

// function App() {
//   const [input, setInput] = useState("");
//   const [list, setList] = useState([]);

//   const handleAdd = () => {
//     if (input.trim() === "") return;

//     setList((prev) => [...prev, input]);
//     setInput("");
//   };

//   const handleClick = (item) => {
//     // check if it's a number
//     if (!isNaN(item)) {
//       alert(item.repeat(4)); // repeat 4 times
//     } else {
//       alert(item);
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <input
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Enter something"
//       />
//       <button onClick={handleAdd}>Add</button>

//       <ul>
//         {list.map((item, index) => (
//           <li
//             key={index}
//             onClick={() => handleClick(item)}
//             style={{ cursor: "pointer" }}
//           >
//             {item}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
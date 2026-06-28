import React,{useState} from "react";

function Todo(){
    const[todos, setTodos]=useState([]);
    const[input, setInput]=useState('');

    const handleInput=(e)=>{
        setInput(e.target.value)
    };

    const handleAdd=()=>{
        if(input.trim()){
        setTodos([...todos,input]);
        setInput("")
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
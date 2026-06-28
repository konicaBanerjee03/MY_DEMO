import React ,{useState,useEffect}from "react";
function App(){
    const[count,setCount]=useState(0);
    const[incr, setIncr]=useState(0);
    const handleClick=()=>{
        setCount((c)=>c+1)
    }
    useEffect(()=>{
        setIncr(count*2)
    },[count])
    
    return(
        <div>
          <p> count: {count}</p>
            <button onClick={handleClick}>+</button>
            <p>{incr}</p>
        </div>
    )
}
export default App;

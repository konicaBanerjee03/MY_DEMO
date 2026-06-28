import React,{useState,useEffect} from "react";


function P1(){
    const startvalue=5;
const endvalue=0;
const[count,setCount]=useState(startvalue);
const[running,setRunning]=useState(false);

useEffect(()=>{
    let timer;
    if(running&& count> endvalue){
        timer=setInterval(()=>{
            setCount((prev)=>prev-1)
        },1000)
      }  else if(count===endvalue){
        setRunning(false)
      }
      return ()=>clearInterval(timer)

    
},[running,endvalue,count])
const startme=()=>{
    setRunning(true)

}
const resetme=()=>{
    setRunning(false)
    setCount(startvalue)
    
}
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={startme}>Start</button><br/>
            <button onClick={resetme}>Reset</button>
        </div>
    )

}
export default P1;
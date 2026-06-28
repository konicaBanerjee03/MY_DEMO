import React,{useState} from "react";

function Count1(){
  const [Counter , setCounter] =useState(0);
  const increment=()=>{
    setCounter(Counter+1);
  };
  return(
    <div>
      <h1>{Counter}</h1>
      <button onClick={increment}>+</button>
    </div>
  );


}
export default Count1;

//manually increment counter+1
//automatically counter value increases/decreases ---using setinterval
//using minute logic counter increases/decreases
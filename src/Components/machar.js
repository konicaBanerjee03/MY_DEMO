import React,{useRef,useState} from "react";
function App(){
  const inputRef=useRef(null)
  const maxLength=50;
  const[remaining,setRemaining]=useState(maxLength);
  const handleChange=()=>{
    const updatedlength=inputRef.current.value.length;
    setRemaining(maxLength-updatedlength)
  }
  return(

    <>
    <textarea
    type="text"
    ref={inputRef}
    maxLength={maxLength}
    onChange={handleChange}
    />
    <p>{remaining}</p>
    </>
  )
}
export default App
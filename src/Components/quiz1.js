import React,{useState} from "react";
function App(){
    const[answer,setAnswer]=useState(' ')
    const[submitdata,setSubmitdata]=useState([])
    const[status,setStatus]=useState("typing")
    const handleChange=(e)=>{
        setAnswer(e.target.value)
    }
    const handleSubmit=()=>{
        setStatus("submitting")
        if(answer.trim().toLowerCase()==='yellow'){
            setStatus("success")
        }
        else{
            setStatus("failure")
        }
    }
    return(
        <div>
            <h2>quiz</h2>
            <p>what is you fav color</p>
            <input type="text" onChange={handleChange}  disabled={status==="submitting"}/>
            <button type="submit" onClick={handleSubmit} disabled={answer.length===0 || status==='submitting'}>submit</button>
            <p>{status==="success"&&'right'}
                {status==='failure' &&'try again'}</p>
        </div>
    )
    
}
export default App;
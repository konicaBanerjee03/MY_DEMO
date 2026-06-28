// button disabled

import React,{useState} from "react";

function Second(){
    const [name, setName]= useState("");

    const nameHandler=(e)=>{
        setName(e.target.value)
    }
    return(
        <div>
            <input type="text" onChange={nameHandler}  />
            <button disabled={name.length<1}>Submit</button>

        </div>
    )
}

export default Second;
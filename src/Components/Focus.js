import React,{useRef} from "react";

function Focus(){
    const inputref = useRef(null);

    const handleClick=()=>{
        inputref.current.focus();

    }
    return(
        <div>
            <input ref={inputref}></input>
            <button onClick={handleClick}>TO Focus</button>

        </div>
    )
}

export default Focus;
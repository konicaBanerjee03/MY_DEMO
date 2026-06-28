import React, { useState } from "react";

function Hide(){
    const[show,setShow]=useState(false);
    const handleToggle=()=>{
        setShow(!show);
    }
    return(
        <div>
            <button onClick={handleToggle}>
                {show?'hide me':'show me'}
            </button>
            {show &&<p>toggled para</p>}
        </div>
    )
}
export default Hide;
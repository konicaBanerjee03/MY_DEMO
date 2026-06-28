// BG color changed

import React, { useState } from "react";

function Example4(){
    const [backgroundColor, setBgColor]= useState("blue")

    const handler=()=>{
        const newbg=backgroundColor==="blue"?"pink":"blue";
        setBgColor(newbg)
    }
    
    return(
        <div  onClick={handler}    style={{
            backgroundColor,
            width:'200px',
            height:'200px',
            textAlign:"center"
            }}>
            Click Me ! MAGIC
        </div>

    )
}

export default Example4;
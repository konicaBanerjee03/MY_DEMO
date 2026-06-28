import React, { useState } from "react";

function Toggle(){
    const[show, setShow]  =useState(true);

   
    return(
        <div>
            <button onClick={()=>setShow(!show)}>Toggle:{show?"show":"Hide"}</button>

            {show && <h2>Hide me</h2>}
           // {state && <div>Toggle Challenge</div>}

        </div>

    )
}

export default Toggle;
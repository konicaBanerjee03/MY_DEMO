// useref

import React,{useRef} from "react";

function Sixth(){
    const divRef=useRef(null);
    const changeColor=()=>{
        if(divRef.current){
            divRef.current.style.backgroundColor=divRef.current.style.backgroundColor==='lightblue'?'lightcoral' : 'lightblue';
            }
    }




    return(
        <div>
        <div ref={divRef} style={{ width: '200px', height: '100px', backgroundColor: 'lightblue', marginBottom: '10px' }}>
                Color box
                </div>
        <button onClick={changeColor}>changeColor</button>
        </div>
    )

}

export default Sixth;
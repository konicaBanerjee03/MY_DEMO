//alert
import React,{useState} from "react";

// function Interview(){
//     const showAlert=()=>{
//         alert("warning!")
//     }
//     return(
//         <div>
//             <button onClick={showAlert}>click</button>

//         </div>
//     )
// }

// export default Interview;
   function Interview(){
    const[increment, setIncrement]=useState(0);

    const handleadd=()=>{
        setIncrement(increment+1);
    }
    return(
        <div>
            <button onClick={handleadd}>ADD</button>
            <h3>{increment}</h3>
        </div>

    )

   }
   export default Interview;
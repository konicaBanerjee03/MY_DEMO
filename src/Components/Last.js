import React from "react";

function Last(){
    const arr=[{id:1, name:"konica"},{id:2, name:"Reeta"},{id:3, name:"shubh"}]
    return(
        <div>
            
            {arr.map((item)=>
           
            <li key={item.id}>
               {item.id} {item.name}
            </li>
           
            
            )}
        </div>
    )
}
export default Last;


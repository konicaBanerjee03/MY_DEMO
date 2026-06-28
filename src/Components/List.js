import React from "react";

 function List(){
    const items= ['I1','I2','I3']

    const i= items.map((id,index)=>
    <li key={index}>{id}</li>)
    return(
        <div>
        <ul>
            {i}
            {/* {items.map((item,index)=>{
                return  <li key={index}>{item}</li>
            })} */}
        </ul>
        </div>
    )
 }

 export default List;
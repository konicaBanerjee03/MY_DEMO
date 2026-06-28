// creating 2 list
import React, { useState } from "react";

function Example6(){
    const [list1, setList1]=useState([{title:'Item1'},{title:'Item2'},{title:'Item3'}]);
    const [list2, setList2]=useState([{title:'ItemA'},{title:'ItemB'},{title:'ItemC'}]);

    const handleCheckboxChange=(idx)=>{
        const updatedList1=[...list1];
        updatedList1[idx].checked=!updatedList1[idx].checked;
        setList1(updatedList1);

    };

    const handleSwap=()=>{
        const updatedList1=[...list1];
        const updatedList2=[...list2];
        updatedList1.forEach((x,idx)=>{
            if(x.checked){
                const  temp =updatedList1[idx].x
                updatedList1[idx].x=updatedList2[idx].x;
                updatedList2[idx].x=temp;
            }

        });
        setList1(updatedList1);
        setList2(updatedList2);
    }
    return(
        <div>
            <div>
                <h2>
                    List 1
                </h2>
                <ul>
                    {list1.map((x,idx)=>(<li key={idx}>
                        <input type="checkbox" checked={x.checked} onChange={()=>handleCheckboxChange(idx)}/>
                        {x.title}
                        </li>
))}
                    
                </ul>

            </div>
            <h2> List 2</h2>
            <ul>
                {list2.map((x,idx)=>(
                    <li key={idx}>
                        {x.title}

                    </li>
                ))}
            </ul>
            <div>

            </div>
            <button onClick={handleSwap}>Swapped checked items</button>

        </div>
    )
}

export default Example6;
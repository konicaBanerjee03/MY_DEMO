//TEXTAREA

import React,{useState} from "react";
function Examp2(){
    const[input, setInput]=useState('');
    const[thirdChars, setThirdChars]=useState('');
    const handleChange=(e)=>{
        const inputText=e.target.value;
        setInput(inputText);
        const thirdcharText=inputText.split('').filter((_,index)=>(index +1)% 3===0).join('');
        setThirdChars(thirdcharText);

    }
    return(
        <div style={{ padding: '20px', textAlign: 'center' }}>
            < textarea value={input} onChange={handleChange} placeholder="type here" rows="10" cols="50"/>
            <p>{thirdChars}</p>
        </div>

    );
}

export default Examp2;
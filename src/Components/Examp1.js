//FONT STYLE  CHANGER

import React,{useState} from "react";

function Examp1(){
    const[font, setFont] =useState('Helvatica');
    const handleFontChange=(newFont)=>{
            setFont(newFont);
    }
    return(
        <div className="font-changer">
            <p style={{font:font}}> This is a paragraph</p>
            <div className="button-container">
            <button onClick={()=>handleFontChange('Helvatica')}>Click me Helvatica!</button>
            <button onClick={()=>handleFontChange('Times New Roman')}>Click me TR!</button>
            </div>
        </div>


    )
}

export default Examp1;
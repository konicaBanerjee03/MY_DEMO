import React,{useRef,useEffect} from "react";

function AutoFocus(){
    const firstInputRef=useRef(null);
    useEffect(()=>{
        if(firstInputRef.current){
            firstInputRef.current.focus();
        }
        
    },[])
    return(
        <form>
            <div>
            <label>
                NAME
            </label>
            <input type="text" ref={firstInputRef} maxLength={1} ></input>
            </div>
            <div>
            <label>
               EMAIL
            </label>
            <input type="email" ></input>
            </div>
            <label>
                MOBILE
            </label>
            <input type="tel" ></input>
        </form>
       
    )
}

export default AutoFocus;
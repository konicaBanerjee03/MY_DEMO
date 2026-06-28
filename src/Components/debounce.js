import React,{useState,useEffect} from "react";
function useDebounce(value,delay){
    const[debounceValue,setDebounceValue]=useState(value);
    useEffect(()=>{
        const timer=setTimeout(()=>{
            setDebounceValue(value)
        },delay)
        return()=>clearTimeout(timer)
    },[value,delay])

    return debounceValue;
    
}

function App(){
    const[search,setSearch]=useState(' ')
    const debounceSearch=useDebounce(search,1000)
    useEffect(()=>{
        if(debounceSearch){
        console.log(debounceSearch)
    }
    },[debounceSearch])
    return(
        <>
            <input type="text"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}/>
                <p>{search}</p>
                <p>{debounceSearch}</p>
        </>
    )
}
export default App;
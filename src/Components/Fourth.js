//custom api
import  React,{useState,useEffect} from 'react';

function Fourth (){

    const startvalue=5;
    const  endvalue=0;
    const [count, setCount] = useState(startvalue);
    const [isRunning, setIsRunning] = useState(false);

        useEffect(()=>{
            let timer;
            if(isRunning && count >endvalue ){
                timer=setInterval(() => {
                    
              setCount((prev)=>prev-1);
            },1000);
        }
        else if(count===endvalue){
            setIsRunning(false);
        }

        return()=>clearInterval(timer);

        },[isRunning,count,endvalue])
        const start = () => setIsRunning(true);
        const reset = () => {
            setIsRunning(false);
            setCount(startvalue);
  };
  
    
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={start}>Start</button>
            <button onClick={reset}>Reset</button>

        </div>
    )
}

export default Fourth;
import React, { useState,useEffect } from "react";

function ProgressBar(){
    const[progressWidth, setProgressWidth]=useState(0);
    useEffect(()=>{
        const interval= setInterval(()=>{
            setProgressWidth((prev)=>{
                if(prev>=100){
                    clearInterval(interval);
                    return prev;
                }
                return prev +10;
            }
            )

        },5000)
    },[])
    // useEffect(() => {
    //     if (progress >= 100) {
    //       return;
    //     }
      
    //     const timer = setInterval(() => {
    //       setProgress((prev) => prev + 10);
    //     }, 1000);
      
    //     return () => clearInterval(timer);
    //   }, [progress]);
    return(
        <div style={{width:'50%',backgroundColor:'grey', height:'40px'}}>
            <div
        style={{
          width: `${progressWidth}%`,
          backgroundColor: '#76c7c0',
          height: '100%',
          //transition: 'width 0.5s ease'
        }}
      />

        </div>
    )
}
export default ProgressBar;
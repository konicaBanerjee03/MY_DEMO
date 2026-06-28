import React,{useState,useEffect} from 'react';

function App() {
  const [light,setLight]=useState("red");
  useEffect(()=>{
    let timer;
    if(light==="red"){
      timer=setTimeout(()=>{
        setLight("green")
      },5000)
    }
    if(light==="yellow"){
      timer=setTimeout(()=>{
        setLight("red")
      },3000)
    }
    if(light==="green"){
      timer=setTimeout(()=>{
        setLight("yellow")
      },2000)
    }
    return ()=>clearTimeout(timer)

  },[light])
  return (
    <>
    <h3>Traffic light</h3>
    <div style={{width:"60px", height:"60px", borderRadius:"50%",background: light === "red" ? "red" : "gray",}}/>
     <div style={{width:"60px", height:"60px", borderRadius:"50%",background: light === "yellow" ? "yellow" : "gray",}}/>
      <div style={{width:"60px", height:"60px", borderRadius:"50%",background: light === "green" ? "green" : "gray",}}/>
      <h3>Current Light: {light.toUpperCase()}</h3>
    </>
  )
}

export default App

import React ,{useState,useEffect} from "react";
function App(){
  const [progress,setProgress]=useState(0);
  const [file,setFile]=useState(null);
  const[uploading,setUploading]=useState(false);
  const handleChange=(e)=>{
    setFile(e.target.files[0])
    setProgress(0)
  }
  const handleProgressBar=()=>{
    if(file){
      setUploading(true)
    }
  }
  useEffect(()=>{
    if(!uploading)
    return
    if(progress>=100){
      return
    }
    let timer=setInterval(()=>{
      setProgress((prev)=>prev+10)
    },1000)

    return ()=>clearInterval(timer)

  },[uploading,progress])

  return(
    <>
    <input type="file" onChange={handleChange}/>
    <button onClick={handleProgressBar}>upload</button>

    {uploading &&<div style={{width:"80%", height:"50px", backgroundColor:"gray"}}>
      <div style={{width:`${progress}%`, height:"100%", backgroundColor:"pink"}}/>
      </div>}
    <p>{progress}</p>
    </>
  )
}
export default App;
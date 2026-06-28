import React,{useState} from "react";
import axios from "axios";

function Fetching1(){
    const[title, setTitle]=useState("")
    const[body,setBody]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/posts",{title:{title}, body:{body}} )
        .then((res)=>{
            console.log(res)
        })
    }
    return(
        <form>
                <label>Title</label>
                <input type ='text' value={title} onChange={(e)=>setTitle(e.target.value)}/> 
                <br/>
                <label> Body</label>
                    <input type='text' value={body} onChange={(e)=>setBody(e.target.value)}/>
                    <button onClick={handleSubmit}>click</button>
            </form>
    )
}
export default Fetching1;
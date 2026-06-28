import React,{useState,useEffect} from "react";
import axios from "axios";

function Fetching(){
   const [posts , setPosts]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            console.log(response)
            setPosts(response.data)

        })
        .catch((err)=>{
            console.log(err)
        })
    })
    return(
        <div>
            <ul>
                {posts.map(x=>(
                    <li key={x.id}>{x.title}</li>
                ))}
            </ul>

        </div>


    )
};

export default Fetching;
//"https://reqres.in/api/users"
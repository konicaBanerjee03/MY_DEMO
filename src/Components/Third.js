//axios

import React,{useEffect, useState} from "react";
import axios from "axios";

function Third(){
    const [data, setData]=useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            setData(response.data)
        })
        .catch((error)=>{
            console.log(error);
        
        });
        
    },[]);
    return(
        <div>
            {data.map(item=>(
                <li key={item.id}>{item.title}</li>

            )

            )}

        
        </div>
    )
}

export default Third;
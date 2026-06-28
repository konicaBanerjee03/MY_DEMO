import React,{useState,useEffect} from "react";
import axios from "axios";

function First(){
    const [user, setUser]=useState(null);
    
    
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users/1")
        .then((response)=>{
            const{name,website,email,phone}=response.data;
            setUser({name,website,email,phone})
        })
        .catch((error) => {
            console.error("Error fetching user data:", error);
        })
    },[])
    if(!user){
        return <div>
            Loading....
        </div>
    }
    return(
        <div>
           <h2>User Info..</h2>
           <p>Name :{user.name}</p>
           <p>web :{user.website}</p>
           <p>email :{user.email}</p>
           <p>phone :{user.phone}</p>

        </div>
    )
}

export default First;
      
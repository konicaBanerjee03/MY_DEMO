//give me a reactjs code api was given and i had to make dropdown list and allow selection

import React, { useState,useEffect }  from "react";
function DropdownApi(){
    const [options,setOptions]=useState([]);
    const [selectedValue,setSelectedValue]=useState('');
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>response.json())
        .then((data)=>{
            setOptions(data)
        })
        .catch((error)=>{
            console.log("error fetchong",error)
        })
    },[])
    const handleChange=(e)=>{
        setSelectedValue(e.target.value)

    }
    return(
       <div>
        <h3>Select a User</h3>
        <select  value={selectedValue} onChange={handleChange}>
            <option value="">select
            </option>
            {options.map((item)=>(
                <option key={item.id} value={item.name}>
                    {item.name}
                </option>
            ))}
        </select>
        {selectedValue &&(
            <p> selected user:{selectedValue}</p>
        )}

       </div>
    )
}
export default DropdownApi;


// import React,{useState,useEffect} from "react";
// function App(){
// const [user,setUser]=useState([]);
// const [selectedId,setSelectedId]=useState(" ");
//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then((response)=>response.json())
//         .then((data)=>{
//            setUser(data) 
//         })
//         .catch((error)=>{
//             console.log("error fetching", error)
//         })
//     },[])
//     const selectedUser= user.find((user)=>user.id===Number(selectedId))
//     return(
//         <div>
//             <h3>dropdown</h3>
//             <select value={selectedId} onChange={(e)=>setSelectedId(e.target.value)}>
//                 <option value=" ">SELECT____</option>
//                 { user.map((user)=>(<option key={user.id} value={user.id}>
//               {user.name}
//                 </option>))}
//             </select>
//             {selectedUser &&(
//             <p>{selectedUser.username}</p>
//             )}
//         </div>
//     )
// }
// export default App;
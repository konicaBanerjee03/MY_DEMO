import React,{useState,useEffect} from "react";

function App(){
    const[user,setUser]=useState([])
    const [loading,setLoading]=useState(true);
    const[error,setError]=useState(null);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(data=>{
            setUser(data);
            setLoading(false)
        })

        .catch(err => setError(err.message));  
    },[])
    return(
        <div>
            <ul>
                {user.map(x=>(
            <li key={x.id}>{x.email}</li>
                ))}
            </ul>
        </div>
    )
}
export default App;

// import React,{useState,useEffect} from "react";
// function App(){
//     const[user,setUser]=useState([]);
//     const[error,setError]=useState(null);
//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/albums')
//         .then(response=>response.json())
//         .then(data=>{
//             const filtered=data.filter((x1)=>x1.id>=1 && x1.id<=10)
//             setUser(filtered);
//         })
//         .catch(err=>{
//             setError(error);
//             console.log("error")
//         })
            
//         },[])
//     return(
        
//         <div>
//             <ul>
//                 {user.map((x)=>(
//             <li key={x.id}>{x.title}</li>))}
//             </ul>
//         </div>
//     )
// }
// export default App;


//loading & error


// import React, { useState, useEffect } from 'react';

// function App() {
//   const [user, setUser] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true); // 👈 loading state

//   useEffect(() => {
//     setLoading(true); // start loading
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => 
//           response.json())
//       .then(data => {
//         setUser(data);
//         setLoading(false); // stop loading after data comes
//       })
//       .catch(err => {
//         setError(err.message);
//         setLoading(false); // stop loading even on error
//       });
//   }, []);

//   return (
//     <div>
//       {loading ? (
//         <p>Loading users...</p> // 👈 show while fetching
//       ) : error ? (
//         <p style={{ color: "red" }}>Error: {error}</p>
//       ) : (
//         <ul>
//           {user.map((x) => (
//             <li key={x.id}>{x.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default App;

import React,{useState,useEffect} from "react";
function App(){
  const[items,setItems]=useState([]);
  const[selectedItem,setselectedItem]=useState(null);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=20')
    .then(response=>response.json())
    .then(data=>{
      setItems(data)
    })
    .catch((err)=>{
      console.log(err)
    })

  },[])

  const handleClick=(i)=>{
    setselectedItem(i)
  }
  return(
    <>
    {items.map((i,id)=>(
      <li key={id} onClick={()=>handleClick(i)}>{i.url}</li>
    ))}
    {selectedItem &&(
      <>
      <p>{selectedItem.title}</p>
      <p>{selectedItem.thumbnailUrl}</p>
      </>
    )}
    </>
  )
}
export default App;
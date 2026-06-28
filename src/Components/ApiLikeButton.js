import React ,{useState,useEffect} from "react";
function App(){
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/posts')
            .then(response=>response.json())
        .then(data=>{
            setPosts(data.posts);
        })
    },[])
    const handleDislike = (id) => {
    const updated = posts.map((i) =>
      i.id === id
        ? {
            ...i,
            reactions: {
              ...i.reactions,
              dislikes: i.reactions.dislikes + 1,
            },
          }
        : i
    );

    setPosts(updated);
  };


  const handleLike = (id) => {
    const updated = posts.map((i) =>
      i.id === id
        ? {
            ...i,
            reactions: {
              ...i.reactions,
              likes: i.reactions.likes + 1,
            },
          }
        : i
    );

    setPosts(updated);
  };
    return(
        <>
            <ul>
                {posts.map((i)=>(
            <li key={i.id}>{i.title}  <button onClick={()=>handleLike(i.id)}>Like{i.reactions.likes}</button>
            <button onClick={()=>handleDislike(i.id)}>Dislike{i.reactions.dislikes}</button>
            </li>
            ))}
               
            </ul>
            
        </>
    )
}
export default App;
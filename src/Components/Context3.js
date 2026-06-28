import React from "react";
import {data} from "./Context";
function Context3(){
    return(
        <>
        <data.Consumer>
            {
                (name)=>{
                    return(
                        <h1>Name is {name}</h1>
                    )
                }

            }
        </data.Consumer>
        </>
        
    )
}

export default Context3;

// incase of context hook
// import React, { useContext } from "react";
// import { UserContext } from "./UserContext";

// function Child() {
//   const user = useContext(UserContext);

//   return <h1>Hello {user}</h1>;
// }

// export default Child;
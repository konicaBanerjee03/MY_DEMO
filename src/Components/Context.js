//create, provider, consumer
import React ,{createContext}from "react";
import Context1 from "./Context1";
const data= createContext();

function Context(){
    const name="konica"
    return(
        <>
        <data.Provider value={name}>
            <Context1/>

        </data.Provider>
        </>

    )
}

export default Context;
export {data};
import React from "react"

function Properties(props){
    return(
        <div>
            <h1>Hello React!</h1>
            <h2>my name is {props.name} from {props.city} </h2>
        </div>

    )
}
export default Properties;
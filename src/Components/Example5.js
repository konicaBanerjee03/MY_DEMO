//useReducer

import React,{useReducer} from "react";

function reducer(state,action){
    switch(action.type){
    case 'INCREMENT':
        return{count:state.count+1}
    
    case 'DECREMENT':
        return{count:state.count-1}
    case 'RESET':
        return{count:0}
    default:
        return  state;
    

    }

}

function Example5(){

    const [state,dispatch]=useReducer(reducer,{count:0});



    return(
        <div>
            <h1>
                COUNTER APP
            </h1>
            <p>Count:{state.count}</p>
            <button onClick={()=>dispatch({type:'INCREMENT'})}>+</button>
             <br/>
            <button onClick={()=>dispatch({type:'DECREMENT'}) }>-</button>

            <button onClick={()=>dispatch({type:'RESET'}) }>RESET</button>

        </div>
    )
}

export default Example5;
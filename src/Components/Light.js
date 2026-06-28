import React, { useState } from "react";
function Cell({filled,onClick,isdisabled}){
    return<button type ='button' disabled={isdisabled} onClick={onClick}
    className={filled ? "cell  cell-activated":"cell"} />
}

function Light(){
    const[order,setOrder]=useState([])
    const[isdeac,setIsdeac]=useState(false)
    const config=[
        [1,1,1],
        [1,0,1],
        [1,1,1]
    ]
    const deactivateCells=()=>{
        setIsdeac(true)
        const timer=setInterval(()=>{
            setOrder((origOrder)=>{
                const newOrder=origOrder.slice()
                newOrder.pop()
                if(newOrder.length===0){
                    clearInterval(timer)
                    setIsdeac(false)
                }
                return newOrder
            })

        },3000)

    }
    const activeCells=(index)=>{
        const newOrder=[...order, index]
        setOrder(newOrder )

        //deactivate
        if(newOrder.length===config.flat(1).filter( Boolean).length)
            deactivateCells()
    }
    return(
        <div className="wrapper">
            <div className="grid" style={{gridTemplateColumns:`repeat(${config[0].length },1fr)`} }>
                {config.flat(1).map((value,index)=>{
                    return value ?<Cell key={index} filled={order.includes(index)} onClick={()=>activeCells(index)}
                    isdisabled={order.includes(index)||isdeac}/>:<span/>
                })}
            </div>

        </div>
    )
}

export default Light;
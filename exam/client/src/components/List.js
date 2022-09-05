import React from "react";

export default props=>{
    return(
        <>
            {props.new.map((element,index)=>{
               return <p key={index}>{element.title},{element.price}</p>
            })}
        </>
    )
}

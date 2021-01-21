import React, { useState, useEffect } from 'react'
import {change} from 'redux-form'
import {connect} from 'react-redux'


function Reset({dispatch}) {
    const [clicked,setClicked]=useState(false);
    const [value,setValue] =useState("");
    const arr =value.split(",");
    
    const onDone=()=>{
        const defaultObj=JSON.parse(localStorage.getItem("default"));
        arr.forEach((val)=>
            // const = name;
            dispatch(change('contact',val,defaultObj[val]))
        )
        
    } 

   console.log(arr)
    return (
        <div>
            <button onClick={()=>setClicked(!clicked)}>Reset Button</button><br/>
            {clicked ?
            <div>
            <input type="text" name="value" value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={()=>onDone()}>Done</button>
            </div>
             : null
            }   
        </div>
    )
}
export default connect()(Reset);

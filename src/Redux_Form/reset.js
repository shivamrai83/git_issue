import React, { useState, useEffect } from 'react'
import {reset} from 'redux-form'
import {connect,useDispatch} from 'react-redux'
import {CHANGE} from '../redux/types'

export default function Reset() {
    const [clicked,setClicked]=useState(false);
    const [value,setValue] =useState("")
    const dispatch = useDispatch()
    useEffect(() => {
        console.log(value);
    }, [clicked,value])
    
    const onButtonClick=()=>{
        const ar=value.split(",");
        const arr=ar.reduce((acc,val)=>(acc[val]=val,acc),{});
        localStorage.setItem("resetFields",JSON.stringify(arr));
        console.log(arr);
    }

    return (
        <div>
            <button onClick={()=>setClicked(!clicked)}>Reset Button</button><br/>
            {clicked ?
            <div>
            <input type="text" name="value" value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={()=>dispatch({type:CHANGE})}>Done</button>
            </div>
             : null
            }   
        </div>
    )
}

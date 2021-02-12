import React from 'react'
import InputBox from '../Custom_Components/input'
import {useState, useEffect} from 'react';
import axios from 'axios';
export default function Test() {

  
  useEffect(()=>{
    sam();
  },[])

  async function sam(){
    const data=await axios.get("http://localhost:3007/data");
    console.log("real",data);
  }

  return(
    <div>
    
    </div>
  ) 
}

import React from 'react'
import "../App.css"
import {useSelector,useDispatch} from 'react-redux'
import {addWatch, addStar, addFork} from '../redux'

export default function Redux() {
    const watch = useSelector(state => state.watch.noOfWatch)
    const star = useSelector(state => state.star.noOfStar)
    const fork = useSelector(state => state.fork.noOfFork)
    const dispatch = useDispatch();

    return (
        <>
        <div className="flex">
        <div className="fb">
        <h1>facebook/create-react-app</h1> 
        </div>
        <div className="buttons">    
             
            <button className="button" onClick={()=>dispatch(addWatch())}>Watch | {watch}</button>&nbsp;
            <button className="button" onClick={()=>dispatch(addStar())}>Star | {star}</button> &nbsp;
            <button className="button" onClick={()=>dispatch(addFork())}>Fork | {fork}</button>
        </div>
        </div>
       
        </>
    )
}

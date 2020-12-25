import React from 'react'
import '../App.css';

export default function Search() {
    return (
    <>
    <div className="flex">
        <div className="text">
            <button className="filter_btn">Filter</button>
            <input type="text" placeholder="is:issue is:open"/>
        </div>
        <div className="btn123">
            <button className="filter_btn1">Labels | 30</button>&nbsp;&nbsp;
            <button className="filter_btn1">Milestone | 4</button>&nbsp;&nbsp;
            <button className="filter_btn3">New issue</button>
        </div>
    </div>
    </>
    )
}

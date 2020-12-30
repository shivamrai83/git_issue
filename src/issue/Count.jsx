import React from 'react'
import {useSelector} from 'react-redux'
import '../App.css'


export default function Count() {
    const users = useSelector(state => state.user.users).map(title=>title.title)
    return (
        <div className="flex">
            
            <h2 className="open">{users.length} Open</h2>        
            <h3 className="close"> 5465 Closed</ h3>    
                  
        </div>
    )
}

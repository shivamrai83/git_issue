import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {checkBox} from '../redux'

export default function testCheckbox() {
    
    const dispatch=useDispatch();
    const val = useSelector(state => state.checkbox.display);
    function sam(){
        alert("shvian")
    }

    return (
        <div>
            {/* <input type="checkbox" onClick={dispatch(sam())} /> */}
            {/* {checked?<p>true</p>:<p>false</p>} */}
            {/* {sam()} */}
            {/* <p>{val}</p> */}

        </div>
    )
}

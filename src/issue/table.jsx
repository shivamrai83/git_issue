import React,{useEffect,useState,createContext} from 'react'
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux'
import {fetchData,addPage} from '../redux'

import '../App.css'

export default function Table() {
    // const [arr,setArr] = useState([]);
    // const [page,setPage] =useState(1);
    // const [loading,setLoading]=useState(true);

    const users = useSelector(state => state.user.users)
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(fetchData())
        console.log("arr",users)
    },[])
    console.log(users)
    // useEffect(async () => {
    //    const data = await axios.get(`https://api.github.com/repos/facebook/react/issues?page=${page}`)
    //    if(page>1){
    //        const setArray=[...arr,...data.data]
    //        setArr(setArray);          
    //    }
      
    //    else{
    //     setArr(data.data)
    //     console.log(arr)
    //    }
    //    setLoading(false);
    // }, [page])

    
    function LoadMoreData(e){
        let reachedBottom= e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight  < 50;
        // if(page>23){
        //     reachedBottom=false;
        // }
        if(reachedBottom){
           dispatch(fetchData());
        }
    }

    return (
        <>
       
        <div onScroll={LoadMoreData} className="table">       
        {/* <div className="table"> */}
            {
                users.map(val=>(
                    <table className="tables">
                        <tr>
                            <td className="td">
                                {val}
                            </td>
                        </tr>
                    </table>
                ))
            }      
         </div>
         </>
    )
}


import React,{useEffect,useState} from 'react'
import axios from 'axios';


import '../App.css'

export default function Table() {
    const [arr,setArr] = useState([]);
    const [page,setPage] =useState(1);
    const [loading,setLoading]=useState(true);

    useEffect(async () => {
       const data = await axios.get(`https://api.github.com/repos/facebook/react/issues?page=${page}`)
       if(page>1){
           const setArray=[...arr,...data.data]
           setArr(setArray);
       }
      
       else{
        setArr(data.data)
       }
       setLoading(false);
    }, [page])

    
    function LoadMoreData(e){
        let reachedBottom= e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight  < 50;
        if(page>23){
            reachedBottom=false;
        }
        if(reachedBottom){
            setPage(page+1);
            console.log(page);
        }
    }

    return (
        <div onScroll={LoadMoreData} className="table">       
            {
                arr.map(val=>(
                    <table className="tables">
                        <tr>
                            <td className="td">
                                {val.title}
                            </td>
                        </tr>
                    </table>
                ))
            }
        
      
         </div>
    )
}

import React,{useEffect,useState} from 'react'
import axios from 'axios'
import '../App.css'

export default function Table() {
    const [arr,setArr] = useState([]);
    useEffect(async () => {
       const data = await axios.get('https://api.github.com/repos/facebook/react/issues?page=1')
       setArr(data.data)
    }, [])

    return (
        <div className="table">
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

import axios from 'axios'
import {Watch, Star, Fork, Fetch_Sucess, Fetch_Fail, Fetch_Start,Page, Check} from './types'
import { useSelector } from "react-redux";
import store from './store'


export const addWatch=()=>{
    return {
        type:Watch
    }
}

export const addStar=()=>{
    return {
        type:Star
    }
}

export const addFork=()=>{
    return {
        type:Fork
    }
}

export const fetchStart=()=>{
    return {
        type:Fetch_Start
    }
}

export const fetchSucess=(users)=>{
    return {
        type:Fetch_Sucess,
        payload:users
    }
}

export const fetchFail = (errMsg) =>{
    return {
        type:Fetch_Fail,
        payload : errMsg
    }
}

export const addPage=()=>{
    return {
        type:Page
    }
}

export const fetchData=()=>{
    return (dispatch) =>{
        dispatch(fetchStart)
        dispatch(addPage)
        const page=store.getState().page.noOfPage
        axios.get(`https://api.github.com/repos/facebook/react/issues?page=${page}`).then(response=>{
                const users = response.data.map(title=>title.title)
                dispatch(fetchSucess(users))
            }).catch(error=>{
                const errorMsg=error.message
                dispatch(fetchFail(errorMsg))
            })
    }
}
console.log(store.getState().form);
console.log(store.getState().checkbox);

export const checkBox=()=>{
    return {
       type:Check
    }
}

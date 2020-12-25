import {Watch, Star, Fork} from './types'

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
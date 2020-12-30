import {Watch, Star, Fork, Fetch_Sucess, Fetch_Fail, Fetch_Start,Page} from './types';

const initialStateWatch={
    noOfWatch:0
}
const initialStateStar={
    noOfStar:0
}
const initialStateFork={
    noOfFork:0
}
const initialStatePage={
    noOfPage:0
}
const initialStateUser={
    loading:false,
    users:[],
    error:''
}
const PageReducer=(state=initialStatePage,action)=>{
    switch (action.type) {
        case Page:
          return{
              ...state,
              noOfPage:state.noOfPage+1
          }          
    
        default:
           return state
    }
}

const UserReducer=(state=initialStateUser,action)=>{
    switch (action.type) {
        case Fetch_Start:
            return{
                ...state,
                loading:true
            }
        case Fetch_Sucess:
            return{
                loading:false,
                users:[...state.users,...action.payload],
                error:'' 
            }
        case Fetch_Fail:
            return{
                loading:false,
                users:[],
                error:action.payload
            }    
    
        default:
            return state
    }
}

const WatchReducer=(state=initialStateWatch,action)=>{
    switch (action.type) {
        case Watch: return{
            ...state,
            noOfWatch:state.noOfWatch+1
        }
        
        default:
            return state;
    }
}

const StarReducer=(state=initialStateStar,action)=>{
    switch (action.type) {
        case Star: return{
            ...state,
            noOfStar:state.noOfStar+1
        }
        
        default:
            return state;
    }
}

const ForkReducer=(state=initialStateFork,action)=>{
    switch (action.type) {
        case Fork: return{
            ...state,
            noOfFork:state.noOfFork+1
        }
        
        default:
            return state;
    }
}

export{
    ForkReducer,
    WatchReducer,
    StarReducer,
    UserReducer,
    PageReducer
}
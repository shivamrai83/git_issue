import {Watch, Star, Fork} from './types';

const initialStateWatch={
    noOfWatch:0
}
const initialStateStar={
    noOfStar:0
}
const initialStateFork={
    noOfFork:0
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
    StarReducer
}
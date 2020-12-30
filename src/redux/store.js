import {createStore, combineReducers,applyMiddleware} from 'redux'
import {WatchReducer, StarReducer, ForkReducer,UserReducer,PageReducer} from './reducer'
import thunk from 'redux-thunk'
const rootReducer=combineReducers({
    watch:WatchReducer,
    star:StarReducer,
    fork:ForkReducer,
    user:UserReducer,
    page:PageReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;
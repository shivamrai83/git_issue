import {createStore, combineReducers} from 'redux'
import {WatchReducer, StarReducer, ForkReducer} from './reducer'

const rootReducer=combineReducers({
    watch:WatchReducer,
    star:StarReducer,
    fork:ForkReducer
})

const store = createStore(rootReducer);

export default store;
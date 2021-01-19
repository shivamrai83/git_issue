import {createStore, combineReducers,applyMiddleware} from 'redux'
import {WatchReducer, StarReducer, ForkReducer,UserReducer,PageReducer} from './reducer'
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import { composeWithDevTools } from 'redux-devtools-extension';
import Validate from '../Redux_Form/validate'

const rootReducer=combineReducers({
    watch:WatchReducer,
    star:StarReducer,
    fork:ForkReducer,
    user:UserReducer,
    page:PageReducer,
    form:formReducer,
    
})

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;
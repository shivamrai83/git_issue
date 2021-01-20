import {createStore, combineReducers,applyMiddleware} from 'redux'
import {WatchReducer, StarReducer, ForkReducer,UserReducer,PageReducer} from './reducer'
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import { composeWithDevTools } from 'redux-devtools-extension';
import Validate from '../Redux_Form/validate'
import {CHANGE} from './types'

const rootReducer=combineReducers({
    watch:WatchReducer,
    star:StarReducer,
    fork:ForkReducer,
    user:UserReducer,
    page:PageReducer,
    form:formReducer.plugin({
        contact: (state, action) => { 
          switch(action.type) {
            case CHANGE:
              return {
                ...state,
               name:"prince",
              };
            default:
              return state;
          }
        }
      }),
    
})

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;
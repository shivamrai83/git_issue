import React from 'react'
import Navbar from './navbar'
import Redux from './redux'
import RouterContent from './router'
import {Provider} from 'react-redux'
import store from '../redux/store'
import Test from './Test'


export default function Project() {
    return (
        <div>
            <Provider store={store}>
            <Navbar/>
            <Redux/>
            <RouterContent/>
            <Test/>
            </Provider>
          
        </div>
    )
}

import React from 'react'
import Navbar from './navbar'
import Redux from './redux'
import RouterContent from './router'
import {Provider} from 'react-redux'
import store from '../redux/store'

export default function Project() {
    return (
        <div>
            <Provider store={store}>
            <Navbar/>
            <Redux/>
            <RouterContent/>
            </Provider>
        </div>
    )
}

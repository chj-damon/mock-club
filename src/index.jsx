import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {Provider} from 'react-redux'
import {Router, hashHistory} from 'react-router'

import rootReducer from './reducers'
import routes from './routes'

import style from './index.scss'

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
)
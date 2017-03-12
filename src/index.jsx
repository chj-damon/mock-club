import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import rootReducer from './reducers'
// import routes from './routes'
import App from './components/App'
import Home from './components/Home'
import About from './components/About'

import './index.scss'

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="about" component={About} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
)
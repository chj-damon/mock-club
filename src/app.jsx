import React, {Component, PropTypes} from 'react'
import { Router, Route, hashHistory, Link } from 'react-router'
import {Button} from 'antd'

const Links = () => (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
    </nav>
)

class Home extends Component {
    componentWillMount() {
        this.context.router.setRouteLeaveHook(
            this.props.route,
            this.routerWillLeave
        )
    }
    routerWillLeave(nextLocation) {
        return `页面即将从Home切换到${nextLocation.pathname}`
    }
    render() {
        return (
            <div>
                <h1>Home</h1>
                <Links />
            </div>
        )
    }
}

Home.contextTypes = {
    router: PropTypes.object.isRequired
}

const Contact = () => (<div><h1>Contact</h1><Links /></div>)

export default class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Home} />
                <Route path="/contact" component={Contact} />
            </Router>
        )
    }
}
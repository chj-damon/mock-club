import React, {Component} from 'react'
import {withRouter} from 'react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import TabNav from './home/TabNav'
import TopicList from './home/TopicList'

import {loadAllTopics} from '../actions'

import './home/home.scss'

class Home extends Component {
    componentWillMount() {
        const {count, loadAllTopics} = this.props
        if (count === 0) {
            loadAllTopics()
        }
    }
    render() {
        return (
            <div>
                <TabNav />
                <TopicList topics={this.props.topics} />
            </div>
        )
    }
}

/**
 * reducer.js中定义的名字会作为state中的一个属性
 */
const mapStateToProps = state => ({
    topics: state.topicReducer.topics,
    count: state.topicReducer.count,
    page: state.topicReducer.page
})
const mapDispatchToProps = dispatch => bindActionCreators({loadAllTopics}, dispatch)

/**
 * mapStateToProps, mapDispatchToProps 最后的props都是在connect()包裹的这个组件中使用
 */
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home))
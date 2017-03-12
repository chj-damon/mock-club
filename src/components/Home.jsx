import React, {Component} from 'react'
import {withRouter} from 'react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import TabNav from './home/TabNav'
import TopicList from './home/TopicList'

import {changeTopic, loadTopics} from '../actions'

import './home/home.scss'

class Home extends Component {
    componentWillMount() {
        const {loadTopics} = this.props
        loadTopics()
    }
    render() {
        return (
            <div>
                <TabNav currentTab={this.props.currentTab} changeTopic={this.props.changeTopic} />
                <TopicList topics={this.props.topics} count={this.props.count} page={this.props.page} />
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
    page: state.topicReducer.page,
    currentTab: state.tabReducer.currentTab
})
const mapDispatchToProps = dispatch => bindActionCreators({
    changeTopic,
    loadTopics
}, dispatch)

/**
 * mapStateToProps, mapDispatchToProps 最后的props都是在connect()包裹的这个组件中使用
 */
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home))
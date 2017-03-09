import React, {Component} from 'react'
import {withRouter} from 'react-router'
import {Layout} from 'antd'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import HeaderComponent from './layout/HeaderComponent'
import Sidebar from './layout/Sidebar'
import FooterComponent from './layout/FooterComponent'

import {loadAllTopics} from '../actions'

import './App.scss'

const {Header, Content, Sider, Footer} = Layout

class App extends Component {
    componentWillMount() {
        const {loadAllTopics, topics} = this.props
        if (topics == null || topics.count === 0) {
            loadAllTopics()
        }
    }
    render() {
        return (
            <Layout>
                <Header>
                    <HeaderComponent />
                </Header>
                <Layout>
                    <Layout>
                        <Content>
                            {this.props.children}
                        </Content>
                    </Layout>
                    <Sider width={300}>
                        <Sidebar />
                    </Sider>
                </Layout>
                <Footer>
                    <FooterComponent />
                </Footer>
            </Layout>
        )
    }
}

const mapStateToProps = state => ({
    topics: state.topics
})
const mapDispatchToProps = dispatch => bindActionCreators({loadAllTopics}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))
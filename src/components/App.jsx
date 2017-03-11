import React, {Component} from 'react'
import {withRouter} from 'react-router'
import {Layout} from 'antd'

import HeaderComponent from './layout/HeaderComponent'
import Sidebar from './layout/Sidebar'
import FooterComponent from './layout/FooterComponent'

import './App.scss'

const {Header, Content, Sider, Footer} = Layout

class App extends Component {
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

export default withRouter(App)
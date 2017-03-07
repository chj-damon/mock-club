import React from 'react'
import {Layout} from 'antd'

import HeaderComponent from './layout/HeaderComponent'
import Sidebar from './layout/Sidebar'
import FooterComponent from './layout/FooterComponent'

import layoutCSS from './App.scss'
const {Header, Content, Sider, Footer} = Layout

const App = ({children}) =>
    <Layout>
        <Header>
            <HeaderComponent />
        </Header>
        <Layout>
            <Layout>
                <Content>
                    {children}
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

export default App
import React from 'react'
import {Link} from 'react-router'
import {Menu, Input} from 'antd'

const HeaderComponent = () =>
    <div className="navInner">
        <div className="logo" />
        <Input />
        <Menu>
            <Menu.Item key="1"><Link to="/">首页</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/about">新手入门</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/">API</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/">关于</Link></Menu.Item>
            <Menu.Item key="5"><Link to="/">注册</Link></Menu.Item>
            <Menu.Item key="6"><Link to="/">登录</Link></Menu.Item>
        </Menu>
    </div>

export default HeaderComponent
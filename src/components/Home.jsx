import React from 'react'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {Table} from 'antd'

import TabNav from './home/TabNav'


import './home/home.scss'

const Home = (props) => {
    const {topics} = props
    const rows = topics ? topics.rows : []
    return (
        <div>
            <TabNav />
            <Table bordered dataSource={rows} />
        </div>
    )
}

const mapStateToProps = state => ({
    topics: state.topics
})

export default connect(mapStateToProps)(withRouter(Home))
import React from 'react'
import {Link, withRouter} from 'react-router'

const TabNav = () => (
    <div className="topic-header">
        <Link to="/all" className="topic-tab current-tab" activeClassName="tabnav-active">全部</Link>
        <Link to="/good" className="topic-tab" activeClassName="tabnav-active">精华</Link>
        <Link to="/share" className="topic-tab" activeClassName="tabnav-active">分享</Link>
        <Link to="/ask" className="topic-tab" activeClassName="tabnav-active">问答</Link>
        <Link to="/job" className="topic-tab" activeClassName="tabnav-active">招聘</Link>
    </div>
)

export default withRouter(TabNav)
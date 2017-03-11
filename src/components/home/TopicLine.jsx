import React from 'react'
import {Link} from 'react-router'

const TopicLine = ({topic}) =>
    <div className="topic-line">
        <Link to="/user/" className="pull-left">{topic.author_id}</Link>
        <span className="reply-count pull-left">test</span>
        <div className="topic-title-wrapper pull-left">
            <span className="put-top">置顶</span>
            <Link to="/topic/" className="topic-title">{topic.title}</Link>
        </div>
        <Link to="/user/" className="pull-right">
            <span>6小时前</span>
        </Link>
    </div>

export default TopicLine
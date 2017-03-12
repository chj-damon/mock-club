import React from 'react'
import {Link} from 'react-router'

const TopicLine = ({topic, dynamicClassName}) => {
    const topicTabName = topic.tab === 'ask' ? '问答' : '分享'
    return (
        <div className={'topic-line ' + dynamicClassName}>
            <Link to={'/user/' + topic.author_id} className="user-avatar pull-left">
                <img src={topic.author_avatar} alt={topic.author_name} title={topic.author_name} />
            </Link>
            {topic.visit_count ? <span className="reply-count pull-left"><span className="count-of-replies">{topic.reply_count}</span>/<span className="count-of-visits">{topic.visit_count}</span></span> : ''}
            <div className="topic-title-wrapper pull-left">
                {topic.top ? <span className="topic-top">置顶</span> : <span className="topic-tab">{topicTabName}</span>}
                <Link to="/topic/" className="topic-title">{topic.title}</Link>
            </div>
            <Link to={'/user/' + topic.reply_id} className="last-reply pull-right">
                <img src={topic.reply_avatar} alt={topic.reply_name} />
                <span className="last-reply-time">{topic.last_reply_at}</span>
            </Link>
        </div>
    )
}
export default TopicLine
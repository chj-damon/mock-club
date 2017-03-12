import React from 'react'
import {Pagination} from 'antd'

import TopicLine from './TopicLine'

const TopicList = ({topics, count, page}) => 
    <div className="topic-list">
        {
            topics.map((topic, i) => {
                const dynamicClassName = topics.length === i + 1 ? 'last' : ''
                return <TopicLine topic={topic} key={topic.topic_id} dynamicClassName={dynamicClassName} />
            })
        }
        {count > 0 ? <Pagination defaultCurrent={page} total={count} /> : ''}
    </div> 

export default TopicList
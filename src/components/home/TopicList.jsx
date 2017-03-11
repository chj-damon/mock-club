import React from 'react'
import TopicLine from './TopicLine'

const TopicList = ({topics}) => 
    <div className="topic-list">
        {
            topics.map((topic) => {
                return <TopicLine topic={topic} key={topic.id} />
            })
        }
    </div> 

export default TopicList
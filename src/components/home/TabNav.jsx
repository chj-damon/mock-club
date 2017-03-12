import React from 'react'
import {Menu} from 'antd'

const TabNav = ({currentTab, changeTopic}) => {
    let allClassName = 'topic-tab '
    let goodClassName = 'topic-tab '
    let shareClassName = 'topic-tab '
    let askClassName = 'topic-tab '
    let jobClassName = 'topic-tab '
    switch (currentTab) {
        case 'good':
            goodClassName += 'tabnav-active'
            break
        case 'share':
            shareClassName += 'tabnav-active'
            break
        case 'ask':
            askClassName += 'tabnav-active'
            break
        case 'job':
            jobClassName += 'tabnav-active'
            break
        case 'all':
        default:
            allClassName += 'tabnav-active'
    }
    return (
        <div className="topic-header">
            <Menu mode="horizontal" onClick={changeTopic}>
                <Menu.Item key="all" className={allClassName}><span>全部</span></Menu.Item>
                <Menu.Item key="good" className={goodClassName}><span>精华</span></Menu.Item>
                <Menu.Item key="share" className={shareClassName}><span>分享</span></Menu.Item>
                <Menu.Item key="ask" className={askClassName}><span>问答</span></Menu.Item>
                <Menu.Item key="job" className={jobClassName}><span>招聘</span></Menu.Item>
            </Menu>
        </div>
    )
}

export default TabNav
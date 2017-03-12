import fetch from 'isomorphic-fetch'

export const ALL_TOPICS = 'ALL_TOPICS'
export const GOOD_TOPICS = 'GOOD_TOPICS'
export const SHARE_TOPICS = 'SHARE_TOPICS'
export const ASK_TOPICS = 'ASK_TOPICS'
export const JOB_TOPICS = 'JOB_TOPICS'
export const CURRENT_TOPIC_TAB = 'CURRENT_TOPIC_TAB'

export const showAllTopics = result => ({
    type: ALL_TOPICS,
    result
})
export const showGoodTopics = result => ({
    type: GOOD_TOPICS,
    result
})
export const showShareTopics = result => ({
    type: SHARE_TOPICS,
    result
})
export const showAskTopics = result => ({
    type: ASK_TOPICS,
    result
})
export const showJobTopics = result => ({
    type: JOB_TOPICS,
    result
})
export const loadTopics = (type = 'ALL', currentPage = 1, pageSize = 40) => {
    return (dispatch) => {
        const url = `http://localhost:3000/fetchTopics/?type=${type}&currentPage=${currentPage}&pageSize=${pageSize}`
        fetch(url)
            .then(response => response.json())
            .then((json) => {
                dispatch(showAllTopics(json))
            })
            .catch(
                dispatch(showAllTopics({}))
            )
    }
}
export const triggerCurrentTopicTab = key => ({
    type: CURRENT_TOPIC_TAB,
    key
})
export const changeTopic = (currentTopic) => {
    const type = currentTopic.key.toUpperCase() || 'ALL'
    return (dispatch) => {
        dispatch(triggerCurrentTopicTab(type.toLowerCase()))
        dispatch(loadTopics(type))
    }
}
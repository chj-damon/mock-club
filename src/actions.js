import fetch from 'isomorphic-fetch'

export const ALL_TOPICS = 'ALL_TOPICS'
export const GOOD_TOPICS = 'GOOD_TOPICS'
export const SHARE_TOPICS = 'SHARE_TOPICS'
export const ASK_TOPICS = 'ASK_TOPICS'
export const JOB_TOPICS = 'JOB_TOPICS'

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
export const loadAllTopics = (currentPage = 1, pageSize = 40) => {
    return (dispatch) => {
        const url = `http://localhost:3000/allTopics/?currentPage=${currentPage}&pageSize=${pageSize}`
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
export const loadGoodTopics = (currentPage = 1, pageSize = 40) => {
    return (dispatch) => {
        const url = `http://localhost:3000/goodTopics/?currentPage=${currentPage}&pageSize=${pageSize}`
        fetch(url)
            .then(response => response.json())
            .then((json) => {
                dispatch(showGoodTopics(json))
            })
            .catch(
                dispatch(showGoodTopics({}))
            )
    }
}
export const loadShareTopics = (currentPage = 1, pageSize = 40) => {
    return (dispatch) => {
        const url = `http://localhost:3000/shareTopics/?currentPage=${currentPage}&pageSize=${pageSize}`
        fetch(url)
            .then(response => response.json())
            .then((json) => {
                dispatch(showShareTopics(json))
            })
            .catch(
                dispatch(showShareTopics({}))
            )
    }
}
export const loadAskTopics = (currentPage = 1, pageSize = 40) => {
    return (dispatch) => {
        const url = `http://localhost:3000/askTopics/?currentPage=${currentPage}&pageSize=${pageSize}`
        fetch(url)
            .then(response => response.json())
            .then((json) => {
                dispatch(showAskTopics(json))
            })
            .catch(
                dispatch(showAskTopics({}))
            )
    }
}
export const loadJobTopics = (currentPage = 1, pageSize = 40) => {
    return (dispatch) => {
        const url = `http://localhost:3000/jobTopics/?currentPage=${currentPage}&pageSize=${pageSize}`
        fetch(url)
            .then(response => response.json())
            .then((json) => {
                dispatch(showJobTopics(json))
            })
            .catch(
                dispatch(showJobTopics({}))
            )
    }
}
import fetch from 'isomorphic-fetch'

export const ALL_TOPICS = 'ALL_TOPICS'
export const GOOD_TOPICS = 'GOOD_TOPICS'
export const SHARE_TOPICS = 'SHARE_TOPICS'
export const ASK_TOPICS = 'ASK_TOPICS'
export const JOB_TOPICS = 'JOB_TOPICS'

export const showAllTopics = jsonResult => ({
    type: ALL_TOPICS,
    topics: jsonResult
})
export const showGoodTopics = jsonResult => ({
    type: GOOD_TOPICS,
    topics: jsonResult
})
export const showShareTopics = jsonResult => ({
    type: SHARE_TOPICS,
    topics: jsonResult
})
export const showAskTopics = jsonResult => ({
    type: ASK_TOPICS,
    topics: jsonResult
})
export const showJobTopics = jsonResult => ({
    type: JOB_TOPICS,
    topics: jsonResult
})
export const loadAllTopics = (currentPage = 1, pageSize = 40) => {
    return (dispatch) => {
        const url = `http://localhost:3000/api/allTopics/?currentPage=${currentPage}&pagpageSize=${pageSize}`
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
        const url = `http://localhost:3000/api/goodTopics/?currentPage=${currentPage}&pagpageSize=${pageSize}`
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
        const url = `http://localhost:3000/api/shareTopics/?currentPage=${currentPage}&pagpageSize=${pageSize}`
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
        const url = `http://localhost:3000/api/askTopics/?currentPage=${currentPage}&pagpageSize=${pageSize}`
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
        const url = `http://localhost:3000/api/jobTopics/?currentPage=${currentPage}&pagpageSize=${pageSize}`
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
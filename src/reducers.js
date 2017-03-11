import {combineReducers} from 'redux'

import {
    ALL_TOPICS,
    GOOD_TOPICS,
    SHARE_TOPICS,
    ASK_TOPICS,
    JOB_TOPICS
} from './actions'

const TOPIC_INITIAL = {
    topics: [],
    count: 0,
    page: 1,
    topic: {}
}
const topicReducer = (state = TOPIC_INITIAL, action) => {
    switch (action.type) {
        case ALL_TOPICS:
            return Object.assign({}, state, {
                topics: 'topics' in action.result ? action.result.topics : [],
                count: 'topicsCount' in action.result ? action.result.topicsCount[0].topicsTotal : 0
            })
        default:
            return state
    }
}

const rootReducer = combineReducers({topicReducer})

export default rootReducer
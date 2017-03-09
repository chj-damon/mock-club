import {combineReducers} from 'redux'

import {
    ALL_TOPICS,
    GOOD_TOPICS,
    SHARE_TOPICS,
    ASK_TOPICS,
    JOB_TOPICS
} from './actions'

const ui = (state = {}, action) => {
    return state
}

const TOPIC_INITIAL = {
    topics: [],
    count: 0,
    page: 1,
    topic: {}
}
const topic = (state = TOPIC_INITIAL, action) => {
    switch (action.type) {
        case ALL_TOPICS:
            return Object.assign({}, state, {
                topics: action.topics.rows,
                count: action.topics.count
            })
        default:
            return state
    }
}

const rootReducer = combineReducers({ui, topic})

export default rootReducer
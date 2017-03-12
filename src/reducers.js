import {combineReducers} from 'redux'

import {
    ALL_TOPICS,
    GOOD_TOPICS,
    SHARE_TOPICS,
    ASK_TOPICS,
    JOB_TOPICS,
    CURRENT_TOPIC_TAB
} from './actions'

const CURRENT_TAB_INITIAL = {
    isCurrent: false
}
const tabReducer = (state = CURRENT_TAB_INITIAL, action) => {
    switch (action.type) {
        case CURRENT_TOPIC_TAB:
            return Object.assign({}, state, {
                currentTab: action.key
            })
        default:
            return state
    }
}

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

const rootReducer = combineReducers({tabReducer, topicReducer})

export default rootReducer
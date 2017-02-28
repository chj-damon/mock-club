import sql from '../mappings/userSqlMapping'
import {query} from './asyncDB'

module.exports = {
    async save(params) {
        const result = await query(sql.insert, [params.userId, params.name, params.loginname, params.password, params.email, params.url, params.profile_image_url, params.location, params.signature, params.profile, params.weibo, params.avatar])
        return result
    },
    async modify(params) {
        const result = await query(sql.modify, [params.name, params.loginname, params.email, params.url, params.profile_image_url, params.location, params.signature, params.profile, params.weibo, params.avatar, params.userId])
        return result
    },
    async find(userId) {
        const user = await query(sql.queryById, [userId])
        return user
    },
    async findAllByPagination(params) {
        const result = await query(sql.queryByPagination, [params.start, params.end])
        return result
    },
    async getUsersCount() {
        const result = await query(sql.userCount)
        return result
    },
    block(userId) {

    },
    active(userId) {

    },
    levelUp(userId) {

    },
    loginAt(userId) {

    },
    increaseScore(userId) {

    },
    increaseFollower(userId) {

    },
    decreaseFollower(userId) {

    },
    increaseTopic(userId) {

    },
    decreaseTopic(userId) {

    },
    increaseReply(userId) {

    },
    decreaseReply(userId) {

    },
    increaseFollowing(userId) {

    },
    decreaseFollowing(userId) {

    },
    increaseCollectTag(userId) {

    },
    decreaseCollectTag(userId) {

    },
    increaseCollectTopic(userId) {

    },
    decreaseCollectTopic(userId) {

    }
}

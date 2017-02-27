import Promise from 'bluebird'
import mysqlConnection from './mysqlConnection'
import jsonResult from '../common/jsonResult'

import sql from '../mappings/userSqlMapping'

module.exports = {
    save(res, params) {
        Promise.using(mysqlConnection(), (connection) => {
            return connection.query(
                sql.insert,
                [params.userId, params.name, params.loginname, params.password, params.email, params.url, params.profile_image_url, params.location, params.signature, params.profile, params.weibo, params.avatar]
            )
            .then((result) => {
                console.log(result)
                if (result) {
                    jsonResult(res, {
                        code: 200,
                        msg: '新增成功'
                    })
                }
            })
            .catch((error) => {
                jsonResult(res, {
                    code: 500,
                    msg: error
                })
            })
        })
    },
    modify(res, params) {
        Promise.using(mysqlConnection(), (connection) => {
            return connection.query(
                sql.modify,
                [params.name, params.loginname, params.email, params.url, params.profile_image_url, params.location, params.signature, params.profile, params.weibo, params.avatar, params.userId]
            )
            .then((result) => {
                if (result) {
                    jsonResult(res, {
                        code: 200,
                        msg: '修改成功'
                    })
                }
            })
            .catch((error) => {
                jsonResult(res, {
                    code: 500,
                    msg: error
                })
            })
        })
    },
    find(res, userId) {
        Promise.using(mysqlConnection(), (connection) => {
            return connection.query(
                sql.queryById,
                userId
            )
            .then((result) => {
                console.log(result)
                if (result) {
                    jsonResult(res, {
                        code: 200,
                        user: result
                    })
                }
            })
            .catch((error) => {
                jsonResult({
                    code: 500,
                    msg: error
                })
            })
        })
    },
    findAllByPagination(res, params) {

    },
    getUsersCount() {

    },
    block(res, userId) {

    },
    active(res, userId) {

    },
    levelUp(res, userId) {

    },
    loginAt(res, userId) {

    },
    increaseScore(res, userId) {

    },
    increaseFollower(res, userId) {

    },
    decreaseFollower(res, userId) {

    },
    increaseTopic(res, userId) {

    },
    decreaseTopic(res, userId) {

    },
    increaseReply(res, userId) {

    },
    decreaseReply(res, userId) {

    },
    increaseFollowing(res, userId) {

    },
    decreaseFollowing(res, userId) {

    },
    increaseCollectTag(res, userId) {

    },
    decreaseCollectTag(res, userId) {

    },
    increaseCollectTopic(res, userId) {

    },
    decreaseCollectTopic(res, userId) {

    }
}

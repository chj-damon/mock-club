import Promise from 'bluebird'
import mysqlConnection from './mysqlConnection'
import jsonResult from '../common/jsonResult'

import sql from '../mappings/userSqlMapping'

module.exports = {
    add(res, params) {
        Promise.using(mysqlConnection(), (connection) => {
            return connection.query(
                sql.insert,
                [params.id, params.name, params.loginname, params.password, params.email, params.url, params.profile_image_url, params.location, params.signature, params.profile, params.weibo, params.avatar]
            )
            .then((result) => {
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
    }
}
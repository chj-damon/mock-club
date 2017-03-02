import userDao from '../dao/userDao'
import uniqueId from '../common/idGenerator'
import passwordHelper from '../common/passwordHelper'
import jsonResult from '../common/jsonResult'

/**
 * insert one user data
 */
exports.addUser = async (req, res) => {
    const params = {}
    params.userId = uniqueId
    params.name = req.body.name
    params.loginname = req.body.loginname
    params.password = passwordHelper.encrypt(req.body.password)
    params.email = req.body.email
    params.url = req.body.url
    params.profile_image_url = req.body.profile_image_url
    params.location = req.body.location
    params.signature = req.body.signature
    params.profile = req.body.profile
    params.weibo = req.body.weibo
    params.avatar = req.body.avatar

    try {
        await userDao.save(params)
        jsonResult(res, {
            code: 200,
            msg: '添加成功'
        })
    } catch (err) {
        jsonResult(res, {
            code: 500,
            err
        })  
    }
}

/**
 * modify one user data
 */
exports.updateUser = async (req, res) => {
    const params = {}
    params.userId = req.body.id
    params.name = req.body.name
    params.loginname = req.body.loginname
    params.email = req.body.email
    params.url = req.body.url
    params.profile_image_url = req.body.profile_image_url
    params.location = req.body.location
    params.signature = req.body.signature
    params.profile = req.body.profile
    params.weibo = req.body.weibo
    params.avatar = req.body.avatar

    try {
        await userDao.modify(params)
        jsonResult(res, {
            code: 200,
            msg: '添加成功'
        })
    } catch (err) {
        jsonResult(res, {
            code: 500,
            err
        })  
    }
}

/**
 * query one user data
 */
exports.queryById = async (req, res) => {
    const userId = req.params.userId
    const user = await userDao.find(userId)
    jsonResult(res, {
        code: 200,
        user
    })
}
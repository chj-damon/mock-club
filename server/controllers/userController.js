import userDao from '../dao/userDao'
import uniqueId from '../common/idGenerator'
import passwordHelper from '../common/passwordHelper'

exports.addUser = (req, res) => {
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

    userDao.save(res, params)
}

exports.updateUser = (req, res) => {
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

    userDao.modify(res, params)
}

exports.queryById = (req, res) => {
    const userId = req.query.userId
    userDao.find(res, userId)
}
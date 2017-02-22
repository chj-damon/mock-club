import config from '../../config'
import jsonResult from '../common/jsonResult'

/**
 * 管理员权限
 */
exports.adminRequired = (req, res, next) => {
    if(!req.session.user) {
        jsonResult(res, {
            code: 1,
            msg: '你还没有登录，请先登录。'
        })
    }
    if(!req.session.user.is_admin) {
        jsonResult(res, {
            code: 1,
            msg: '需要管理员权限。'
        })
    }
    next();
}

/**
 * 需要登录
 */
exports.userRequred = (req, res, next) => {
    if(!req.session || !req.session.user || !req.session.user.id) {
        jsonResult(res, {
            code: 1,
            msg: '你还没有登录，请登录。'
        })
    }
}

/**
 * 被屏蔽
 */
exports.blockUser = (req, res, next) => {
    if(req.path === '/signout') {
        return next()
    }
    if(req.session.user && req.session.user.is_block && req.method !== 'GET') {
        jsonResult(res, {
            code: 1,
            msg: '您已经被管理员屏蔽，请联系'
        })
    }
    next()
}

/**
 * 生成session
 */
exports.getSession = (user, res) => {
    const authToken = user.id + '$$$$';
    const opts = {
        path: '/',
        maxAge: 1000 * 60 * 60 * 24 * 30,
        signed: true,
        httpOnly: true
    }
    res.cookie(config.auth_cookie_name, authToken, opts)
}

/**
 * 验证用户信息
 */
exports.authUser = (req, res, next) => {
    next()
}
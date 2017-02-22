import path from 'path'
import express from 'express'
import session from 'express-session'
import passport from 'passport'
import bodyParser from 'body-parser'
import compress from 'compression'

import config from './config'
// import logger from './server/common/logger'
// import requestLog from './server/middlewares/request_log'
// import auth from './server/middlewares/auth'

const staticDir = path.join(__dirname, 'dist')

const urlInfo = require('url').parse(config.host)
config.hostname = urlInfo.hostname || config.host

const app = express()

// app.use(requestLog)
app.use(express.static(staticDir))

app.use(bodyParser.json({limit: '1mb'}))
app.use(bodyParser.urlencoded({ extended: true, limit: '1mb' }))
// app.use(require('cookie-parser')(config.session_secret))
app.use(compress())
// app.use(session({
//     secret: config.session_secret
// }))

// oauth 中间件
//app.use(passport.initialize())

// custom middleware
// app.use(auth.authUser)
// app.use(auth.blockUser)

app.use((err, req, res, next) => {
    console.error(err)
    return res.status(500).send('500 status')
})

app.listen(config.port, config.hostname, ()=> {
    console.info(process.env.NODE_ENV)
    console.info('NodeClub listening on port', config.port)
    console.info('You can debug your app with http://' + config.hostname + ':' + config.port)
})

module.exports = app
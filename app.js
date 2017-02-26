import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import compress from 'compression'

import config from './config'
import logger from './server/common/logger'

import routes from './server/routes'

const staticDir = path.join(__dirname, 'dist')
const urlInfo = require('url').parse(config.host)

config.hostname = urlInfo.hostname || config.host

const app = express()

app.use(express.static(staticDir))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(compress())

// router
app.use('/', routes)

app.listen(config.port, config.hostname, () => {
    logger.info('NodeClub listening on port', config.port)
    logger.info('You can debug your app with http://' + config.hostname + ':' + config.port)
})

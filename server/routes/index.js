import express from 'express'
import site from '../controllers/site'
import sign from '../controllers/sign'
import user from '../controllers/user'
import message from '../controllers/message'
import topic from '../controllers/topic'
import reply from '../controllers/reply'
import statics from '../controllers/static'
import auth from '../controllers/auth'
import search from '../controllers/search'

import config from '../../config'

const router = express.Router()

// homepage
router.get('/', site.index)

// mobile app download
router.get('/app/download', site.appDownload)
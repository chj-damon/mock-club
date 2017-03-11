import express from 'express'

import user from './server/controllers/userController'
import topic from './server/controllers/topicController'

const router = express.Router()

// topic
router.get('/allTopics', topic.allTopics)

// user
router.get('/user/find/:userId', user.queryById)
router.post('/user/add', user.addUser)

module.exports = router

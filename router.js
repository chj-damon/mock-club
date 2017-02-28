import express from 'express'

import user from './server/controllers/userController'

const router = express.Router()

router.post('/user/add', user.addUser)
router.get('/user/find/:userId', user.queryById)

module.exports = router

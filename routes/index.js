const express = require('express')

const controller=require('../controllers/index')



const router = express.Router()

router.get('/', controller.getUsersList)

router.post('/user/:id',controller.getUserDetails)
router.get('/user/:id/update',controller.setUserDetails)

module.exports = router
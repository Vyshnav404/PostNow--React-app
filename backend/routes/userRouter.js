const express = require('express');
const { userSignup} = require('../controllers/userController/signupController')
const { userLogin } = require('../controllers/userController/loginController')
const router = express.Router()

router.post('/signup',userSignup)
router.post('/login',userLogin)


module.exports = router
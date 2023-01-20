const express = require('express');
const { adminLogin } = require('../controllers/adminController/adminLoginController')
const adminrouter = express.Router()


adminrouter.post('/adminLogin',adminLogin)


module.exports = adminrouter;
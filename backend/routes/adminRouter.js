const express = require('express');
const { adminLogin } = require('../controllers/adminController/adminLoginController')
const { getUserDetails ,
    blockUser,unBlockUser} = require('../controllers/adminController/adminUserDetails')
const adminrouter = express.Router()


adminrouter.post('/adminLogin',adminLogin)
adminrouter.get('/userdetails',getUserDetails)
adminrouter.put('/block-user/:id',blockUser)
adminrouter.put('/unblock-user/:id',unBlockUser)

module.exports = adminrouter;
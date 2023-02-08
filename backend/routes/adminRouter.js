const express = require('express');
const { adminLogin } = require('../controllers/adminController/adminLoginController')
const { getUserDetails ,
    blockUser,unBlockUser} = require('../controllers/adminController/adminUserDetails')
const { getReportQuestion,getReportQuestionDetails,deleteQuestion } = require('../controllers/adminController/adminQuestionController')    
const adminrouter = express.Router()


adminrouter.post('/adminLogin',adminLogin)
adminrouter.get('/userdetails',getUserDetails)
adminrouter.put('/block-user/:id',blockUser)
adminrouter.put('/unblock-user/:id',unBlockUser)
adminrouter.get('/getreportQuestion',getReportQuestion)
adminrouter.get('/getReportQuestionDetails/:row',getReportQuestionDetails)
adminrouter.delete('/question-delete/:qid',deleteQuestion)

module.exports = adminrouter;
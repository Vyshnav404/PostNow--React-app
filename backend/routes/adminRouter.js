const express = require('express');
const { adminLogin } = require('../controllers/adminController/adminLoginController')
const { getUserDetails ,
    blockUser,unBlockUser} = require('../controllers/adminController/adminUserDetails')
const { getReportQuestion,getReportQuestionDetails,deleteQuestion } = require('../controllers/adminController/adminQuestionController')   
const { createAds,getAllAds,deleteAd } = require('../controllers/adminController/adsController') 
const { getReportedPost,getSingleReportedPost,deleteReportPost } = require('../controllers/adminController/adminPostController')
const adminrouter = express.Router()


adminrouter.post('/adminLogin',adminLogin)
adminrouter.get('/userdetails',getUserDetails)
adminrouter.put('/block-user/:id',blockUser)
adminrouter.put('/unblock-user/:id',unBlockUser)
adminrouter.get('/getreportQuestion',getReportQuestion)
adminrouter.get('/getReportQuestionDetails/:row',getReportQuestionDetails)
adminrouter.delete('/question-delete/:qid',deleteQuestion)
adminrouter.post('/createads',createAds)
adminrouter.get('/adsdetails',getAllAds)
adminrouter.delete('/adsdelete/:id',deleteAd)
adminrouter.get('/getreportpost',getReportedPost)
adminrouter.get('/singlereportedpost/:id',getSingleReportedPost)
adminrouter.delete('/post-delete/:id',deleteReportPost)
module.exports = adminrouter;
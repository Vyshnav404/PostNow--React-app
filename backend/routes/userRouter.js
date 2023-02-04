const express = require('express');
const { userSignup,verifyUser} = require('../controllers/userController/signupController')
const { userLogin } = require('../controllers/userController/loginController')
const { addQuestion,getQuestionAnswer ,getOneQuestion} =require('../controllers/userController/questionController')
const { addAnswer } = require('../controllers/userController/answerController')
const { getUser,getUserDetails,
    updateUserDetails,profilePicture} = require('../controllers/userController/userDetailsController')

const router = express.Router()

router.post('/signup',userSignup)
router.post('/login',userLogin)
router.post('/questions', addQuestion)
router.post('/answers',addAnswer)
router.get('/getUser/:email',getUser)
router.get('/getUserDetails/:data_id',getUserDetails)
router.put('/update-user',updateUserDetails)
router.put('/profilePicture/:id',profilePicture)
router.post('/otpVerify',verifyUser)
router.get('/onequestion/:qid',getOneQuestion)

try {
    router.get('/Allquestions',getQuestionAnswer)
} catch (error) {
    console.log(error,"this is the error");
}


module.exports = router
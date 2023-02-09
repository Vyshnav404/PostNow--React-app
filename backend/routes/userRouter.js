const express = require('express');
const { userSignup,verifyUser,resendotp} = require('../controllers/userController/signupController')
const { userLogin } = require('../controllers/userController/loginController')
const { addQuestion,getQuestionAnswer ,getOneQuestion,reportQuestion} =require('../controllers/userController/questionController')
const { addAnswer,getAllQuestion } = require('../controllers/userController/answerController')
const { getUser,getUserDetails,
    updateUserDetails,profilePicture} = require('../controllers/userController/userDetailsController');
const verifyToken = require('../middleware/authjwt');


    const router = express.Router()
    
    router.post('/signup',userSignup)
    router.post('/login',userLogin)
    router.post('/otpVerify',verifyUser)
    router.post('/resendotp/:mail',resendotp)


router.get('/onequestion/:qid',getOneQuestion)
router.post('/questions', addQuestion)
router.post('/reportQuestion/:qid',reportQuestion)


router.post('/answers',addAnswer)
router.get('/getAnswers/:qid',getAllQuestion)
router.get('/Allquestions',getQuestionAnswer)


router.get('/getUser/:email',verifyToken,getUser)
router.get('/getUserDetails/:data_id',getUserDetails)
router.put('/update-user',updateUserDetails)
router.put('/profilePicture/:id',profilePicture)





module.exports = router
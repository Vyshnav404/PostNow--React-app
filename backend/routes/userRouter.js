const express = require('express');
const { userSignup} = require('../controllers/userController/signupController')
const { userLogin } = require('../controllers/userController/loginController')
const { addQuestion,getQuestionAnswer } =require('../controllers/userController/questionController')
const { addAnswer } = require('../controllers/userController/answerController')

const router = express.Router()

router.post('/signup',userSignup)
router.post('/login',userLogin)
router.post('/questions', addQuestion)
router.post('/answers',addAnswer)

try {
    router.get('/Allquestions',getQuestionAnswer)
} catch (error) {
    console.log(error,"this is the error");
}


module.exports = router
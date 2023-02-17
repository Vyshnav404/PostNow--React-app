const express = require('express');
const { userSignup,verifyUser,resendotp} = require('../controllers/userController/signupController')
const { userLogin } = require('../controllers/userController/loginController')
const { addQuestion,getQuestionAnswer ,getOneQuestion,reportQuestion,
    getQuestionsOnProfile} =require('../controllers/userController/questionController')
const { addAnswer,getAllQuestion } = require('../controllers/userController/answerController')
const { getUser,getUserDetails,
    updateUserDetails,profilePicture} = require('../controllers/userController/userDetailsController');

const verifyToken = require('../middleware/authjwt');

const { addPost,getAllPosts,reportPost,editPost,addDisLike,
    deletePost,getPostOnProfile,getImage,addLike } = require('../controllers/userController/userPostController')
const { otherDetails } =require('../controllers/userController/othersDetailsController')    


const router = express.Router()
    
router.post('/signup',userSignup)
router.post('/login',userLogin)
router.post('/otpVerify',verifyUser)
router.post('/resendotp/:mail',resendotp)

 
router.get('/onequestion/:qid',verifyToken,getOneQuestion)
router.post('/questions',verifyToken, addQuestion)
router.post('/reportQuestion/:qid',verifyToken,reportQuestion) 
router.get('/Allquestions',verifyToken ,getQuestionAnswer)


router.post('/answers',verifyToken,addAnswer)
router.get('/getAnswers/:qid',getAllQuestion)


router.get('/getUser/:email',verifyToken,getUser)
router.get('/getUserDetails/:data_id',verifyToken,getUserDetails)
router.put('/update-user',verifyToken,updateUserDetails)
router.put('/profilePicture/:id',verifyToken,profilePicture)
router.get('/postOnProfile/:id',verifyToken,getPostOnProfile)
router.get('/questionOnProfile/:id',verifyToken,getQuestionsOnProfile)


router.post('/addPost',addPost)
router.get('/getAllPosts',getAllPosts)
router.put('/reportPost/:id',reportPost)
router.delete('/deletePost/:id',deletePost) 
router.get('/getImgToEdit/:postId',getImage)
router.put('/editPost/:postId',editPost)
router.put('/addLike/:id',addLike)
router.put('/disLike/:id',addDisLike)


router.get('/getOthersDetail/:id',otherDetails)





module.exports = router
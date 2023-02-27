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
const { getFriend }  = require('../controllers/userController/friendController')


const router = express.Router()
   
//login and signup section
router.post('/signup',userSignup)
router.post('/login',userLogin)
router.post('/otpVerify',verifyUser)
router.post('/resendotp/:mail',resendotp)

//Question section
router.get('/onequestion/:qid',verifyToken,getOneQuestion)
router.post('/questions',verifyToken, addQuestion)
router.post('/reportQuestion/:qid',verifyToken,reportQuestion) 
router.get('/Allquestions',verifyToken ,getQuestionAnswer)

//answer section
router.post('/answers',verifyToken,addAnswer)
router.get('/getAnswers/:qid',getAllQuestion)

//profile section
router.get('/getUser/:email',verifyToken,getUser)
router.get('/getUserDetails/:data_id',verifyToken,getUserDetails)
router.put('/update-user',verifyToken,updateUserDetails)
router.put('/profilePicture/:id',verifyToken,profilePicture)
router.get('/postOnProfile/:id',verifyToken,getPostOnProfile)
router.get('/questionOnProfile/:id',verifyToken,getQuestionsOnProfile)

//post section
router.post('/addPost',addPost)
router.get('/getAllPosts',getAllPosts)
router.put('/reportPost/:id',reportPost)
router.delete('/deletePost/:id',deletePost) 
router.get('/getImgToEdit/:postId',getImage)
router.put('/editPost/:postId',editPost)
router.put('/addLike/:id',addLike)
router.put('/disLike/:id',addDisLike)

//others profile section
router.get('/getOthersDetail/:id',otherDetails)


//get friend
router.get('/getfriend/:friendId',verifyToken,getFriend)





module.exports = router
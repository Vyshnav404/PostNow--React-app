const postDb = require('../../models/post')

const addPost = async(req, res)=>{
    try {
       await postDb.create({
        postUrl:req.body.postUrl,
        caption:req.body.caption,
        user:req.body.user,
       }).then((response)=>{
        console.log(response,"========>");
       })
    } catch (error) {
        console.log(error);
    }
}

const getAllPosts = async(req,res)=>{
  try {
    await postDb.find({}).then((response)=>{
        res.status(200).json(response)
    })
  } catch (error) {
    console.log(error);
  }
}


const reportPost = async(req,res)=>{
  try {
    let id = req.params.id
    await postDb.findByIdAndUpdate({_id:id},{$set:{
      report:true
    }})
  } catch (error) {
    console.log(error);
  }
}

const getPostOnProfile  = async(req,res)=>{
  try {
    let userId = req.params.id;
    await postDb.find({'user._id':userId}).then((response)=>{
      res.status(200).json(response)
    })
  } catch (error) {
    console.log(error);
  }
}


module.exports={
    addPost,
    getAllPosts,
    reportPost,
    getPostOnProfile
}
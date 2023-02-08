const questionDB = require('../../models/question')


const addQuestion = async(req,res)=>{
  console.log("alert");

    try {
        await questionDB.create({
            questionName: req.body.questionName,
            questionUrl: req.body.questionUrl,
            user:req.body.user,
        }).then(()=>{
            res.status(201).send({
                status:true,
                message:"Question added successfully"
            })
        }).catch((err)=>{
            res.status(400).send({
                status: false,
                message: "Bad format"
            })
        })
    } catch (e) {
        res.status(500).send({
            status: false,
            message: "Error while adding question"
        })
    }
}

const getQuestionAnswer = async(req,res)=>{
    console.log("its comming");
    try {
        await questionDB.aggregate([
            {
                $lookup:{
                    from: "answers",
                    localField: "_id",
                    foreignField: "questionId",
                    as: "allAnswers"
                }
            }
        ]).exec().then((doc)=>{
            res.status(200).send(doc)
        }).catch((error)=>{
            res.status(500).send({
                status:false,
                message: "Unable to get the question details"
            })
        })
    } catch (e) {
        res.status(500).send({
            status:false,
            message:"Unexpected Error"
        })
    }
}

const getOneQuestion = async(req,res)=>{
    let id = req.params.qid;
   
  try {
    await questionDB.findById({_id:id}).then((response)=>{
        res.status(200).json(response)
    })
  } catch (error) {
    console.log(error);
  }
}

const reportQuestion = async(req,res)=>{
    let qid = req.params.qid;
    try {
      
        questionDB.findByIdAndUpdate(qid,{$set:{report:true}}).then((response)=>{
            console.log(response,"report");
            res.status(200).json(response)
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports ={
    addQuestion,
    getQuestionAnswer,
    getOneQuestion,
    reportQuestion
}
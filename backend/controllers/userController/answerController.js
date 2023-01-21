const answerDB = require('../../models/answer')

const addAnswer = async(req,res)=>{
    console.log('cooooooommmmme',req.body);
    try {
        await answerDB.create({
            answer: req.body.answer,
            questionId: req.body.questionId
        }).then(()=>{
            res.status(201).send({
                status: true,
                message: 'Answer added successfully'
            })
        }).catch((e)=>{
            res.status(400).send({
                status: false,
                message: "Bad request"
            })
        })
        
    } catch (error) {
        res.status(500).send({
            status: false,
            message: 'Error while adding answer'
        })
    }
}

module.exports= {
    addAnswer
}
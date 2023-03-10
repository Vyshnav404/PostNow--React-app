const Message = require('../../models/message')


const addMessage = async(req,res)=>{
    const newMessage = new Message(req.body);
    try {
        const savedMessage = await newMessage.save();
        res.status(200).json(savedMessage)
    } catch (error) {
        res.status(500).json(error)
    }
}


const getMessage = async(req,res)=>{
    try {
        const messages = await Message.find({
            conversationId:req.params.conversationId,
        });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json(error)
    }
}


module.exports={
    addMessage,
    getMessage
}
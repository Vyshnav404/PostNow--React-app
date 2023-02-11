const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    postUrl :{ type:String , required:true},
    caption:String,
    like:Number,
    dislike:Number,
    createdAt:{
        type:Date,
        default: Date.now()
    },
    report:{
        type:Boolean,
        default:false,
    },
    comment:String,
    user:Object,
})

module.exports = mongoose.model("Posts",PostSchema)
const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    postUrl :{ type:String , required:true},
    caption:String,
    like:[{
        type:mongoose.SchemaTypes.ObjectId
    }],

    dislike:[{
        type:mongoose.SchemaTypes.ObjectId
    }],

    createdAt:{
        type:Date,
        default: Date.now()
    },
    report:{
        type:Boolean,
        default:false,
    },
    reason:[{type:String}],
    comment:String,
    user:Object,
    comment:[{type:String}]
})

module.exports = mongoose.model("Posts",PostSchema)


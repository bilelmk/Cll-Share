const mongoose=require('mongoose')
const member=require('./member')
const CommentarySchema=mongoose.Schema({
    content:{
        type:String
    },
    createdAt:{
        type:String
    },
    updatedAt:{
        type:String
    }
})
 module.exports=mongoose.model('Commentary',CommentarySchema)
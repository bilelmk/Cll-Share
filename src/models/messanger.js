const mongoose=require('mongoose');
const messageSchema=require('./message')
const messangerSchema=mongoose.Schema({
    firstInterlocutor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'member'
    },
    secondInterlocutor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'member'
    },
    messages:[{
        type:messageSchema,
    }],
    createdAt:{
        type:String
    },
    updatedAt:{
        type:String
    }

})

module.exports=mongoose.model('messanger',messangerSchema)
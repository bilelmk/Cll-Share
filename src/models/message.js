const mongoose=require('mongoose');
const member=require('./member');
const fileSchema=require('./file')

export const messageSchema=mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    images:[{
        type:fileSchema
    }],
    files:[{
        type:fileSchema
    }],
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'member',
        required:true
    },
    createdAt:{
        type:String
    },
    updatedAt:{
        type:String
    }
})

module.exports=mongoose.model('message',messageSchema);
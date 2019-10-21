const mongoose = require('mongoose');
const commentary=require('./Commentary');
const fileSchema=require('./file')
const postSchema = mongoose.Schema({
    content:{
        type:String
    },
    images:[{
        type:fileSchema,
    }],
    files:[{
        type:fileSchema
    }],
    comments:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'commentary'
    },
    createdAt:{
        type:String
    },
    updatedAt:{
        type:String
    }
})

module.exports=mongoose.model('post',postSchema)
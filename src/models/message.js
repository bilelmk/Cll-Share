const mongoose=require('mongoose');
const member=require('./member')

export const messageSchema=mongoose.Schema({
    contenu:{
        type:String,
        required:true
    },
    image:{
        type:Buffer
    },
    file:{
        type:Buffer
    },
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'member',
    }
})

module.exports=mongoose.model('message',messageSchema);
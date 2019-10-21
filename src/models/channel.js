const mongoose=require('mongoose');
const member=require('./member')
const post=require('./post')

const channelSchema=mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    subject:{
        type:String
    },
    master:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'member'
    },
    members:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'member'
    }],
    createdAt:{
        type:String
    },
    updatedAt:{
        type:String
    },
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'post'
    }]

    
})
module.exports=mongoose.model('channel',channelSchema)
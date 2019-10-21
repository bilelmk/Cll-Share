const mongoose = require('mongoose');
const member=require('./member');
const channel=require('./channel')

const belongSchema = mongoose.Schema({
   date:{
        type:String
    },
    member:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'member'
    },
    channel:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'channel'
    }
})

module.exports=mongoose.model('belong',belongSchema)
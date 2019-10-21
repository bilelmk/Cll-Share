const mongoose = require('mongoose');
const fileSchema=require('./file')
const Post=require('./post');
const eventTask=require('./event');
const channel=require('./channel');
const messenger=require('./messanger');
const workshop=require('./workshop')
const optionSchema = mongoose.Schema({
    NotifyWorkshops:{
        type: Boolean,
    },
    NotifyEvents:{
        type:Boolean
    },
    NotifyMeetings:{
        type:Boolean
    },
    langue:{
        type:String,
        enum:['ARABE','FRENCH','ENGLISH'],
        default:'FRENCH',
    },
    createdAt:{
        type:String
    },
    updatedAt:{
        type:String
    }
});

const memberSchema = mongoose.Schema({
    firstName:{
        type: String, 
    },
    lastName:{
        type: String, 
    },
    photo:[{
        type: fileSchema, 
    }],
    birthDate:{
        type: String, 
    },
    mail:{
        type: String, 
        required:true
    },
    password:{
        type: String, 
        required:true
    },
    adress:{
        type: String, 
    },
    active:{
        type: String,
        required:true ,
        enum:['ONLINE','OFFLINE'],
        default:'OFFLINE'
    },
    otherInfo:{
        type: String, 
    },
    role:{
        type:String,
        enum:['ADMIN','SIMPLE_USER'],
        default:'SIMPLE_USER'
    },
    option : {type: optionSchema},
    posts:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'post'
    },
    tasks:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'eventTask',
    },
    channels:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'channel'
    },
    messengers:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'messanger'
    },
    workshopsPresentedByUser:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'workshop'
    }],
    createdAt:{
        type:String
    },
    updatedAt:{
        type:String
    }
});

module.exports = mongoose.model('member', memberSchema);
module.exports=mongoose.module('optin',optionSchema)
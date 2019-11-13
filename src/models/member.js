import {Schema, model} from 'mongoose'
import validator from 'validator'
import {fileSchema} from './file'

const optionSchema = Schema({
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
    createdAt: {
        type: Date,
        default:  new Date()
    },
    updatedAt: {
        type: Date,
        default:  new Date()
    }
});

const memberSchema = Schema({
    firstName:{
        type: String, 
    },
    lastName:{
        type: String, 
    },
    photo:{
        type: fileSchema, 
    },
    birthDate:{
        type: Date, 
    },
    mail:{
        lowercase:true,
        trim:true,
        required:true,
        unique:true,
        type:String,
        validate: (value)=>{
            return validator.isEmail(value);
        }, 
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
        type:Schema.Types.ObjectId,
        ref:'post'
    },
    tasks:{
        type:Schema.Types.ObjectId,
        ref:'eventTask',
    },
    channels:{
        type:Schema.Types.ObjectId,
        ref:'channel'
    },
    messengers:{
        type:Schema.Types.ObjectId,
        ref:'messanger'
    },
    workshopsPresentedByUser:[{
        type:Schema.Types.ObjectId,
        ref:'workshop'
    }],
    createdAt: {
        type: Date,
        default:  new Date()
    },
    updatedAt: {
        type: Date,
        default:  new Date()
    }
});

const memberModel = model('member',memberSchema)
const optionModel = model('option',optionSchema)
export {memberModel as default, optionModel}
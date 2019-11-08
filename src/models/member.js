import {Schema, model} from 'mongoose'
import * as fileSchema from './file'
import * as post from './post'
import * as eventTask from './event'
import * as channel from './channel'
import * as messanger from './messanger'
import * as workshop from './workshop'
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
    createdAt:{
        type:Date
    },
    updatedAt:{
        type:Date
    }
});

const memberSchema = Schema({
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
        type: Date, 
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
    createdAt:{
        type:Date
    },
    updatedAt:{
        type:Date
    }
});

export default model('member',memberSchema)
export default model('option',optionSchema)
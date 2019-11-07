import {Schema, model} from 'mongoose'
const meetingSchema=Schema({
    dateTime:{
        type:String,
    },
    details:{
        type:String
    },
    title:{
        type:String
    },
    points:[{
        type:String
    }],
    createdAt:{
        type:Date,
        default: new Date()
    },
    updatedAt:{
        type:Date,
        default: new Date()
    }

})


export default model('meeting',meetingSchema)

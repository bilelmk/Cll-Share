import {Schema, model} from 'mongoose'
const meetingSchema=Schema({
    dateTime:{
        type:Date,
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
        type:Date
    },
    updatedAt:{
        type:Date
    }

})


export default model('meeting',meetingSchema)

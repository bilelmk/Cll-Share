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
        type:String
    },
    updatedAt:{
        type:String
    }

})


export default model('meeting',meetingSchema)

import {Schema, model} from 'mongoose'
import * as member from './member'


const eventTaskSchema=Schema({
    
    member:{
        type:Schema.Types.ObjectId,
        ref:'member',
    },
    task:{
        type:String,
        required: true
    },
    event:{
        type:Schema.Types.ObjectId,
        ref:'event'
    },
    createdAt: {
        type: Date,
        default:  new Date()
    },
    updatedAt: {
        type: Date,
        default:  new Date()
    }
})

const eventSchema=Schema({
    name:{
        type:String,
        required: true,
        unique: true
    },
    dateTime:{
        type:Date
    },
    details:[{
        type:String
    }],
    tasks:[{
        type:eventTaskSchema
    }],
    createdAt: {
        type: Date,
        default:  new Date()
    },
    updatedAt: {
        type: Date,
        default:  new Date()
    }

})

const eventModel = model('event', eventSchema) 
const eventTaskModel = model('eventTask', eventTaskSchema)
export {eventModel as default, eventTaskModel}


import {Schema, model} from 'mongoose'
import * as member from './member'


const eventTaskSchema=Schema({
    
    member:{
        type:Schema.Types.ObjectId,
        ref:'member',
    },
    task:{
        type:String
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
        type:String
    },
    dateTime:{
        type:Date
    },
    details:{
        type:String
    },
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

export default model('event',eventSchema)
export default model('eventTask',eventTaskSchema)


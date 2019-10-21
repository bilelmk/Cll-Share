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
    createdAt:{
        tpye:String
    },
    updatedAt:{
        type:String
    }
})

const eventSchema=Schema({
    name:{
        type:String
    },
    dateTime:{
        type:String
    },
    details:{
        type:String
    },
    tasks:[{
        type:eventTaskSchema
    }],
    createdAt:{
        type:String
    },
    updatedAt:{
        type:String
    }

})

export default model('event',eventSchema)
export default model('eventTask',eventTaskSchema)


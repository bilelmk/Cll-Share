import {Schema, model} from 'mongoose'
import * as member from './member'
import * as post from './post'

const channelSchema=Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    subject:{
        type:String
    },
    master:{
        type:Schema.Types.ObjectId,
        ref:'member'
    },
    members:[{
        type:Schema.Types.ObjectId,
        ref:'member'
    }],
    createdAt:{
        type:Date
    },
    updatedAt:{
        type:Date
    },
    posts:[{
        type:Schema.Types.ObjectId,
        ref:'post'
    }]

    
})
export default model('channel',channelSchema)
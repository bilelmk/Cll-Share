import {Schema, model} from 'mongoose'
import * as messageSchema from './message'
import * as member from './member'
const messangerSchema=Schema({
    firstInterlocutor:{
        type:Schema.Types.ObjectId,
        ref:'member'
    },
    secondInterlocutor:{
        type:Schema.Types.ObjectId,
        ref:'member'
    },
    messages:[{
        type:messageSchema,
    }],
<<<<<<< HEAD
    createdAt:{
        type:Date
    },
    updatedAt:{
        type:Date
=======
    createdAt: {
        type: Date,
        default:  new Date()
    },
    updatedAt: {
        type: Date,
        default:  new Date()
>>>>>>> 6b946eb2fd0ef489740851a773c952498ec2f8f1
    }

})

export default model('messanger',messageSchema)
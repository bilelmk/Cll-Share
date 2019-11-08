import {Schema, model} from 'mongoose'
import * as member from './member'
import * as fileSchema from './file'

export const messageSchema=Schema({
    content:{
        type:String,
        required:true
    },
    images:[{
        type:fileSchema
    }],
    files:[{
        type:fileSchema
    }],
    author:{
        type:Schema.Types.ObjectId,
        ref:'member',
        required:true
    },
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

export default model('message',messageSchema)
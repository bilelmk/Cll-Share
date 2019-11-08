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
    createdAt:{
        type:Date
    },
    updatedAt:{
        type:Date
    }
})

export default model('message',messageSchema)
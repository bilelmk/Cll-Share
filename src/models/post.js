import {Schema, model} from 'mongoose'
import * as commentary from './Commentary'
import * as fileSchema from './file'
const postSchema = Schema({
    content:{
        type:String
    },
    images:[{
        type:fileSchema,
    }],
    files:[{
        type:fileSchema
    }],
    comments:{
        type:Schema.Types.ObjectId,
        ref:'commentary'
    },
    createdAt:{
        type:Date
    },
    updatedAt:{
        type:Date
    }
})

export default model('post',postSchema)
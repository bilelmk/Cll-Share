import {Schema, model} from 'mongoose'
import {fileSchema} from './file'
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
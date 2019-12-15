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
    comments:[{
        type:Schema.Types.ObjectId,
        ref:'commentary'
    }],
    author: {
        type: Schema.Types.ObjectId,
        ref: 'member'
    },
    channel: {
        type: Schema.Types.ObjectId,
        ref: 'channel'
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

export default model('post',postSchema)
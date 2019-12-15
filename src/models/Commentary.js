import {Schema, model} from 'mongoose'

const CommentarySchema=Schema({
    content:{
        type:String
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'member'
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'post'
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
export default model('commentary',CommentarySchema)
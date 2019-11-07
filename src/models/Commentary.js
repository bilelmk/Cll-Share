import {Schema, model} from 'mongoose'

const CommentarySchema=Schema({
    content:{
        type:String
    },
    createdAt:{
        type:Date,
        default: new Date()
    },
    updatedAt:{
        type:Date,
        default: new Date()
    }
})
export default model('commentary',CommentarySchema)
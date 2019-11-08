import {Schema, model} from 'mongoose'

const CommentarySchema=Schema({
    content:{
        type:String
    },
    createdAt:{
        type:Date
    },
    updatedAt:{
        type:Date
    }
})
export default model('commentary',CommentarySchema)
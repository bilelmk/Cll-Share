import {Schema, model} from 'mongoose'

const CommentarySchema=Schema({
    content:{
        type:String
    },
    createdAt:{
        type:String
    },
    updatedAt:{
        type:String
    }
})
export default model('commentary',CommentarySchema)
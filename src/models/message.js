import {Schema, model} from 'mongoose'
import {fileSchema} from './file'

const messageSchema=Schema({
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
    createdAt: {
        type: Date,
        default:  new Date()
    },
    updatedAt: {
        type: Date,
        default:  new Date()
    }
})

const messengerModel = model('message',messageSchema)

export {messengerModel as default, messageSchema}

import {Schema, model} from 'mongoose'

const belongSchema = Schema({
   date:{
        type: String
    },
    member:{
        type: Schema.Types.ObjectId,
        ref: 'member'
    },
    channel:{
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
    },
})

export default model('belong',belongSchema)
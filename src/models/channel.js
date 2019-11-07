import {Schema, model} from 'mongoose'
import * as member from './member'
import * as post from './post'

const channelSchema=Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    description: {
        type: String
    },
    subject: {
        type: String
    },
    master: {
        type: Schema.Types.ObjectId,
        ref: 'member'
    },
    members: [{
        type: Schema.Types.ObjectId,
        ref: 'member'
    }],
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'post'
    }],
    createdAt: {
        type: Date,
        default:  new Date()
    },
    updatedAt: {
        type: Date,
        default:  new Date()
    }

    
})
export default model('channel', channelSchema)
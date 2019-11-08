import {Schema, model} from 'mongoose'
import * as member from './member'

const workshopSchema=Schema({
    name:{
        type: String
    },
    dateTime:{
        type:Date
    },
    subject:{
        type: String
    },
    details:{
        type: String
    },
    presenter:{
        type: Schema.Types.ObjectId,
        ref: 'member'
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



export default model('workshop',workshopSchema)


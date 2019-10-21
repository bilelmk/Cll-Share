import {Schema, model} from 'mongoose'
import * as member from './member'

const workshopSchema=Schema({
    name:{
        type:String
    },
    dateTime:{
        type:String
    },
    subject:{
        type:String
    },
    details:{
        type:String
    },
    presenter:{
        type:Schema.Types.ObjectId,
        ref:'member'
    },
    createdAt:{
        type:String
    },
    updatedAt:{
        type:String
    }
})



export default model('workshop',workshopSchema)


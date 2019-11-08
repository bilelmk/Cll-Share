import {Schema, model} from 'mongoose'

const notificationSchema=Schema({
    contenu:{
        type:String
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
export default model('notification',notificationSchema)


import {Schema, model} from 'mongoose'

const notificationSchema=Schema({
    contenu:{
        type:String
    },
})
export default model('notification',notificationSchema)


import {Schema, model} from 'mongoose'

const fileSchema=Schema({
    name:{
        type:String
    },
    mimetype:{
        type:String
    },
    encoding:{
        type:String
    },
    createdAt:{
        type:String
    },
    updatedAt:{
        type:String
    }
})



export default model('file',fileSchema)

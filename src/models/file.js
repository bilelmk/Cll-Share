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
        type:Date
    },
    updatedAt:{
        type:Date
    }
})

const fileModel = model('file',fileSchema)


export {fileModel as default, fileSchema}

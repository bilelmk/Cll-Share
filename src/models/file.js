const mongoose=require('mongoose');

const fileSchema=mongoose.Schema({
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



module.export=mongoose.model('file',fileSchema)

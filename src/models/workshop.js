const mongoose=require('mongoose');

const workshopSchema=mongoose.Schema({
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
        type:mongoose.Schema.Types.ObjectId,
        ref:'member'
    },
    createdAt:{
        type:String
    },
    updatedAt:{
        type:String
    }
})



module.export=mongoose.model('workshop',workshopSchema)


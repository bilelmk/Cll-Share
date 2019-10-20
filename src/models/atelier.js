const mongoose=require('mongoose');

const atelierSchema=mongoose.Schema({
    date_heure:{
        type:Date,
    },
    formateur:{
        type:String
    },
    sujet:{
        type:String
    },
    description:{
        type:String
    }
})



module.export=mongoose.model('atelier',atelierSchema)


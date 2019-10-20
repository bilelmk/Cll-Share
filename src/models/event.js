const mongoose=require('mongoose');

const eventSchema=mongoose.Schema({
    nom:{
        type:String
    },
    date_heure:{
        type:Date
    },
    details:{
        type:String
    }
})

module.export=mongoose.model('event',eventSchema)


const mongoose=require('mongoose');
const reunionSchema=mongoose.Schema({
    date_heure:{
        type:Date,
    },
    details:{
        type:String
    }
})


module.export=mongoose.model('reunion',reunionSchema)

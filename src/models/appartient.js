const mongoose = require('mongoose');
const member=require('./member')

const appartientSchema = mongoose.Schema({
   date:{
        type:Date
    },
    member:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'member'
    }
    
})

module.exports=mongoose.model('appartient',appartientSchema)
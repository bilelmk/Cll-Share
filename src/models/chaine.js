const mongoose=require('mongoose');
const member=require('./member')
const poste=require('./poste')

const chaineSchema=mongoose.Schema({
    nom:{
        type:String
    },
    description:{
        type:String
    },
    sujet:{
        type:String
    },
    date:{
        type:Date
    },
    member_createur:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'member'
    },
    member:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'member'
    }]
    
})
module.exports=mongoose.model('chaine',chaineSchema)
const mongoose = require('mongoose');
const Post=require('./poste');
const optionSchema = mongoose.Schema({
    notif_atelier:{
        type: String, 
    },
    notif_event:{
        type:String
    },
    notif_reunion:{
        type:String
    },
    langue:{
        type:String
    },
    theme:{
        type:String
    }
});

const memberSchema = mongoose.Schema({
    nom:{
        type: String, 
    },
    prenom:{
        type: String, 
    },
    photo:{
        type: Buffer, 
    },
    date_naissance:{
        type: Date, 
    },
    mail:{
        type: String, 
        required:true
    },
    password:{
        type: String, 
        required:true
    },
    adresse:{
        type: String, 
    },
    active:{
        type: Boolean,
        required:true 
    },
    description:{
        type: String, 
    },
    option : {type: optionSchema},
    
});

module.exports = mongoose.model('member', memberSchema);
module.exports=mongoose.module('optin',optionSchema)
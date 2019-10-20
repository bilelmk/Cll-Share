const mongoose = require('mongoose');
const commentaire=require('./commentaire')
const postSchema = mongoose.Schema({
    contenu:{
        type:String
    },
    image:{
        type:Buffer,
    },
    file:{
        type:Buffer
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'member'
    },
    chaine:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'chaine'
    }
})

module.exports=mongoose.model('poste',postSchema)
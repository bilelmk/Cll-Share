const mongoose=require('mongoose')
const member=require('./member')
const commentaireSchema=mongoose.Schema({
    contenu:{
        type:String
    },
    member:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'member'
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'post'
    }
})
 module.exports=mongoose.model('commentaire',commentaireSchema)
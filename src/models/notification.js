const mongoose=require('mongoose');

const notificationSchema=mongoose.Schema({
    contenu:{
        type:String
    },
})
module.exports=mongoose.model('notification',notificationSchema);


const mongoose=require('mongoose');
const messageSchema=require('./message')
const messangerSchema=mongoose.Schema({
    first_interloctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'member'
    },
    second_interloctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'member'
    },
    messages:[{
        type:messageSchema,
    }]

})

module.exports=mongoose.model('messanger',messangerSchema)
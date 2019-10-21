const mongoose=require('mongoose');
const member=require('./member')

const eventTaskSchema=mongoose.Schema({
    
    member:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'member',
    },
    task:{
        type:String
    },
    event:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'event'
    },
    createdAt:{
        tpye:String
    },
    updatedAt:{
        type:String
    }
})

const eventSchema=mongoose.Schema({
    name:{
        type:String
    },
    dateTime:{
        type:String
    },
    details:{
        type:String
    },
    tasks:[{
        type:eventTaskSchema
    }],
    createdAt:{
        type:String
    },
    updatedAt:{
        type:String
    }

})

module.export=mongoose.model('event',eventSchema)
module.exports=mongoose.model('eventTask',eventTaskSchema)


const mongoose=require('mongoose');
const meetingSchema=mongoose.Schema({
    dateTime:{
        type:String,
    },
    details:{
        type:String
    },
    title:{
        type:String
    },
    points:[{
        type:String
    }],
    createdAt:{
        type:String
    },
    updatedAt:{
        type:String
    }

})


module.export=mongoose.model('meeting',meetingSchema)

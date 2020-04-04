const mongoose=require('mongoose')
const eventschema=new mongoose.Schema({
    eventname:{
        type:String
    },
    organisedby:{
        type:String
    },
    start:{
        type:Date
    },
    end:{
        type:Date
    },
    close:{
        type:String
     },
    description:{
        type:String
    }
})
const event=mongoose.model('event_data',eventschema);
module.exports=event;
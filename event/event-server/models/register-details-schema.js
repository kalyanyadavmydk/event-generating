const mongoose=require('mongoose')
const register_details=new mongoose.Schema({
    eventname:{
        type:String
    },
    username:{
        type:String
    },
    gmail:{
        type:String
    }
})
const register=mongoose.model("register_details",register_details);
module.exports=register
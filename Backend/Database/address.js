const  mongoose  = require("mongoose");

const  addressName = new mongoose.Schema({
    name:{
        type:String,
    },
    number:{
        type:Number,
    },
    address:{
        type:String,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }

        

})
const addressData = new mongoose.model("address",addressName)
 module.exports= addressData
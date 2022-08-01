const mongoose = require('mongoose')

async function connectResponse(){
    const dbUrl = "mongodb://localhost:27017/address"
    // const dbUri = "mongodb://localhost:27017/getmeip"
    try{
    const response=await mongoose.connect(dbUrl)
    console.log('success')
    }catch(ex){
        console.log("error",ex.message)
    }

}
module.exports=connectResponse;
const mongoose = require("mongoose")
const { isEmail } = require("validator")

const AuthModel = new mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        requried: true
    },
    phone_number:{
        type: Number
    },
    email:{
        type: String,
        trim: true,
        required: true,
        lowercase : true,
        unique: true,
        validate: [ isEmail, 'invalid email' ]
    },
    address:{
        type: String
    },
    password:{
        type: String
    }
})

const AuthSchema = mongoose.model("User", AuthModel)

module.exports = {AuthSchema}
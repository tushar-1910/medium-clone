const {AuthSchema} = require("../Database/users");
const jwt = require("jsonwebtoken");
require("dotenv").config();

async function figAuth(req,res){
    const { input } = req.body
    const inputType = typeof input
    
    if(inputType === "number"){

        let existingNumber = await AuthSchema.findOne({phone_number:input})

        try {
            if(existingNumber){
                return res.status(302).send("Number Already Registered")
            }else{
                return res.status(404).send("Number Not Found")
            }
        }
        catch (error) {
            return res.status(502).send(error)
        }

    }else if(inputType === "string"){
        
        let existingEmail = await AuthSchema.findOne({email:input})

        try {
            if(existingEmail){
                return res.status(302).send("Email already Registered")
            }else{
                return res.status(404).send("Email Not Found")
            }
        }
        catch (error) {
            return res.status(502).send(error)
        }

    }
    
}

async function AuthReq(req,res){
    const { ReqDataBody } = req.body

    const data = {
        first_name: ReqDataBody.first_name,
        last_name: ReqDataBody.last_name,
        phone_number: ReqDataBody.phone_number,
        email: ReqDataBody.email,
        password: ReqDataBody.password
    }

    try {
      await AuthSchema.create(data)
      return res.status(201).send("User Created Created")
    } catch (error) {
        return res.status(502).send(error)
    }
}


async function AuthLog(req,res){
    
    const { input, password } = req.body
    
    if(+input/1 == input){
        
        let existingNumber = await AuthSchema.findOne({phone_number:input})

        try {
            if(existingNumber){
                
                if(existingNumber.password === password){

                    let encryptionToken = jwt.sign({
                        id: existingNumber._id,
                        first_name: existingNumber.first_name
                    }, process.env.SECRET)
                    
                    res.status(202).send(JSON.stringify(encryptionToken))
                }else{
                    res.status(406).send("Wrong Password")
                }
            }else{
                return res.status(404).send("Number Not Found")
            }
        }
        catch (error) {
            return res.status(502).send(error)
        }


    }else{
        
        let existingEmail = await AuthSchema.findOne({email:input})

        try {
            if(existingEmail){
                
                if(existingEmail.password === password ){

                    let encryptionToken = jwt.sign({
                        id: existingEmail._id,
                        first_name: existingEmail.first_name
                    }, process.env.SECRET)

                    return res.status(202).send({encryptionToken})
                }else{
                    res.status(406).send("Wrong Password")
                }
            }else{
                return res.status(404).send("Email Not Found")
            }
        }
        catch (error) {
            return res.status(502).send(error)
        }


    }
    
}


module.exports = {
    figAuth,
    AuthReq,
    AuthLog
}
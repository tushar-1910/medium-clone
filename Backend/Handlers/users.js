const AuthSchema = require("../Database/users");
const jwt = require("jsonwebtoken");
const SECRET = "ThisWouldBeTheBestNYKAAclone"

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
    const {first_name, last_name, phone_number, email, password} = req.body

    const data = {
        first_name: first_name,
        last_name: last_name,
        phone_number: phone_number,
        email: email,
        password: password
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
                        id: existingNumber._id
                    }, SECRET)
                    
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
                
                if(existingEmail.password === password){

                    let encryptionToken = jwt.sign({
                        id: existingEmail._id
                    }, SECRET)

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
const {addressData} = require("../Database/address");
const jwt = require("jsonwebtoken");

async function postdata(req,res,next){
    try {
        let address  = req.body;
        const {token}=  req.headers;
        let user = jwt.decode(token);
        address.user = user.id;
        console.log(address)
        let naddress=await addressData(address)
        await naddress.save();
    
        return res.send({
            message:"address data",
            naddress
        });
        
    } catch (error) {
        console.log(error);
        throw error;
    }

}

async function allusers(req,res,next){
    console.log(req.body)
    const {token}=  req.headers;
    let user = jwt.decode(token);

    const address = await addressData.find({user: user.id});
    return res.send({
        data:address
    })
}

module.exports = {
    postdata,
    allusers
} 
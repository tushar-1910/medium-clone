const express = require('express')
const cors = require('cors')
const connectResponse = require('./database')
const addressRouter = require('./routes/address')

const app = express()
app.use(express.json())
app.use(cors())

app.use(addressRouter);

app.use(logger);
function logger(req,res,next){
    console.info(new Date(), req.method, req.path);
    next()
}

connectResponse().then(()=>{
app.listen(9000,()=>{
    console.log("server is working at http://localhost:9000")
})


})
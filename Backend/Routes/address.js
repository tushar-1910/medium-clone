const express = require('express')
const addressData = require('../database/address')
const { postdata,allusers} = require('../handlers/address')



const addressRouter = express.Router()
addressRouter.get('/address/all',allusers)
addressRouter.post('/address',postdata)



module.exports=addressRouter;
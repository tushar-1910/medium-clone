const express = require("express")
const { AuthReq, figAuth, AuthLog} = require("../Handlers/users")

const Auth = express.Router()

Auth.post('/auth/verify',figAuth)
Auth.post('/auth/register', AuthReq)
Auth.post('/auth/login', AuthLog)


module.exports = Auth
const express = require('express');
const { getOrder, createOrder, deleteCart, updateCart } = require('../Handlers/orders');


const orderRouter = express.Router();

orderRouter.get('/getOrder',getOrder);
orderRouter.post('/createOrder/:product',createOrder);
orderRouter.delete('/deleteOrder',deleteCart);
orderRouter.patch('/updateCart',updateCart);

module.exports = {orderRouter};
const { Order } = require('../Database/orders');
const jwt = require('jsonwebtoken');
const randomstring = require('randomstring');
var dateTime = require('node-datetime');

const getOrder = async (req,res) => {
    try {
        const {token} = req.headers;
        let user = jwt.decode(token);
        const order = await Order.find({user: user.id}).populate('product');
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({message: "No orders found"});
    }
}

const createOrder = async (req,res) => {
    console.log(req.body);
    let {product} = req.params;
    let checkProduct = await Order.find({product: product});
    if(checkProduct.length > 0){
       return res.status(200).json({message: "Product already in cart"});
    }
    try {
        let orderId = randomstring.generate({
            length: 6,
            charset: 'numeric'
        });
        var dt = dateTime.create();
        var formatted = dt.format('d-m-Y');
        const {token} = req.headers;
        let user = jwt.decode(token);
        let order = {
            orderId: orderId,
            orderDate: formatted,
            orderStatus: "Processing",
            orderTotal: req.body.orderTotal,
            product: req.params.product,
            quantity: req.body.quantity,
            user: user.id
        };
        console.log(order)
        const newOrder = await Order(order);
        await newOrder.save();
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({message: "Order not created"});
    }
}

const updateCart = async (req,res) => {
    try {
        const {val,id} = req.body;
        console.log(req.body)
        const {token} = req.headers;
        let user = jwt.decode(token);
        const order = await Order.findOneAndUpdate({user:user.id,product: id}, {$set: {quantity: val}});
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({message: "Order not updated"});
    }
}

const deleteCart = async (req,res) => {
    try {
        const {id} = req.body;
        const order = await Order.findOneAndDelete({product: id});
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({message: "Order not deleted"});
    }
}


module.exports = {
    getOrder,
    createOrder,
    updateCart,
    deleteCart
}
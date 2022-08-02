const mongoose = require('mongoose');


const  orderSchema = new mongoose.Schema({
    orderId: String,
    orderDate: String,
    orderStatus: String,
    orderTotal: Number,
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },
    quantity: Number,
    user :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}
);

const Order = mongoose.model('Order', orderSchema);

module.exports = { Order };
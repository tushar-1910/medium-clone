const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: String,
    image_url:String,
    mrp:Number,
    price:Number,
    discount:Number,
    rating:Number,
    offertag:String,
    brand:String,
    category:String
}, {
    timestamps: true
})

const Products = mongoose.model('Product', productSchema)

module.exports = {Products};
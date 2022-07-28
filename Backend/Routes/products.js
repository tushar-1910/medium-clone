const express = require('express');
const { createProduct, getAllProducts } = require('../Handlers/product');

const productRouter = express.Router()


productRouter.post('/products', createProduct);
productRouter.get('/products', getAllProducts);



module.exports = productRouter;
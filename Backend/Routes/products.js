const express = require('express');
const { createProduct, getAllProducts, getProductById } = require('../Handlers/product');

const productRouter = express.Router()


productRouter.post('/products', createProduct);
productRouter.get('/products', getAllProducts);
productRouter.get('/products/:productId', getProductById);



module.exports = productRouter;
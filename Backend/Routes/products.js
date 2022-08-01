const express = require('express');
const { createProduct, getAllProducts, getProductById, getSortedProductData, findDatabyName, getProductbyCategory } = require('../Handlers/product');

const productRouter = express.Router()


productRouter.post('/products', createProduct);
productRouter.get('/products', getAllProducts);
productRouter.get('/products/:productId', getProductById);
productRouter.get('/product', getSortedProductData);
productRouter.get('/productbyname', findDatabyName);
productRouter.get('/productbycategory', getProductbyCategory);



module.exports = productRouter;


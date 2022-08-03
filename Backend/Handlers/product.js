const {Products} = require("../Database/product")

async function createProduct(req, res, next) {
    let { product } = req.body;
    //console.log(product)
    product = await Products.create(product);

    return res.send({
        data: product
    })
}

const getAllProducts = async (req, res, next) => {
    const products = await Products.find();

    if (!products) {
        return res.status(404).send({ "message": "no data or something wrong" });
    } else {
        return res.status(200).send(products);
    }
}

const getProductById = async (req, res, next) => {
    const product = await Products.findById(req.params.productId);
    if (!product) {
        return res.status(404).send({
            "message": "product not found"
        })
    } else {
        return res.status(200).send(product);
    }
}


const getSortedProductData = async (req, res, next) => {
    let sort1 = req.query.sort;
    let order1 = req.query.order;
    //console.log(sort1);
    let products;
    if (sort1 === "price") {
        order1 === "Asc" ? products = await Products.find().sort({ "price": 1 }) : products = await Products.find().sort({ "price": -1 })
    } else if (sort1 === "discount") {
        order1 === "Asc" ? products = await Products.find().sort({ "discount": 1 }) : products = await Products.find().sort({ "discount": -1 })
    } else if (sort1 === "rating") {
        order1 === "Asc" ? products = await Products.find().sort({ "rating": 1 }) : products = await Products.find().sort({ "rating": -1 })
    } else if (sort1 === "name") {
        order1 === "Asc" ? products = await Products.find().sort({ "name": 1 }) : products = await Products.find().sort({ "name": -1 })
    } else if (sort1 === "popularity") {
        products = await Products.find();
    } else if (sort1 === "newarrival") {
        products = await Products.find({ name: /ne/i });
    } else if (sort1 === "lowtohigh") {
        products = await Products.find().sort({ "price": 1 })
    } else if (sort1 === "hightolow") {
        products = await Products.find().sort({ "price": -1 })
    } else if (sort1 === "nykaproducts") {
        products = await Products.find({ brand: "Nykaa" })
    } else if (sort1 === "mamaearthproducts") {
        products = await Products.find({ brand: "Mamaearth" })
    } else if (sort1 === "pondsproducts") {
        products = await Products.find({ brand: "Ponds" })
    }

    if (!products) {
        return res.status(404).send({
            "message": "products not found"
        })
    } else {
        return res.status(200).send(products);
    }

}

const findDatabyName = async (req, res, next) => {
    let string = req.query.name;
    const products = await Products.find({ name: { $regex: string } });
    if (!products) {
        return res.status(404).send({
            "message": "products not found"
        })
    } else {
        return res.status(200).send(products);
    }
}

const getProductbyCategory = async (req, res, next) => {
    let category = req.query.category;
    const products = await Products.find({ category: category });
    if (!products) {
        return res.status(404).send({
            "message": "products not found"
        })
    } else {
        return res.status(200).send(products);
    }
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    getSortedProductData,
    findDatabyName,
    getProductbyCategory
}


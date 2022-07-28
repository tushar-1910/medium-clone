const express = require('express');
const cors = require('cors');
const connectDatabase = require('./Database/index');
const productRouter = require('./Routes/products');


const app = express()

app.use(express.json())
app.use(cors())        


app.use(logger);

app.use(productRouter);


function logger(req, res, next) {
    console.info(new Date(), req.method, req.path);
    next();
}


connectDatabase().then(() => {
    app.listen(8080, () => {
        console.log("Server running at http://localhost:8080")
    })
})

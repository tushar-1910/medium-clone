const express = require('express');
const cors = require('cors');
const { connectDB } = require('./Database');
// const orderRouter = require('./Routes/orders');
const Auth = require('./Routes/users');


const app = express();
app.use(cors());
app.use(express.json());

app.use((req,res,next) => {
    console.log(req.method, req.url);
    next();
});

// app.use(orderRouter);
app.use(Auth)

connectDB().then(() => {
    app.listen(8080, () => {
        console.log('Server started on port 8080');
});});
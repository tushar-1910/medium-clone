const mongoose = require('mongoose');
require('dotenv').config();

async function connectDB() {
    const dbUri = process.env.MONGO_URI

    try {
        await mongoose.connect(dbUri)
        console.log('Connected to Database');
    } catch (error) {
        console.log('Error connecting to database')
        throw error
    }
}

module.exports = {connectDB};

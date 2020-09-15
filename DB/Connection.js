require('dotenv').config();
const mongoose = require('mongoose');

const { DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;
const URI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@todoscluster.qtuwh.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

const connectDB = async () => {
    await mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('db connected');
};

module.exports = connectDB;

require('dotenv').config();
const mongoose = require('mongoose');

const { DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;
const URI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@todoscluster.qtuwh.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

const connectDB = async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('db connected');
    } catch(err) {
        if (!DB_NAME || !DB_PASSWORD || !DB_USERNAME) {
            console.error('No environmental db data provided');
            return;
        }
        console.error(err);
    }
};

module.exports = connectDB;

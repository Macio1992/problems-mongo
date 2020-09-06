const mongoose = require('mongoose');

const URI = "mongodb+srv://maciej:1xJyorp7hXXBCdMt@todoscluster.qtuwh.mongodb.net/problemsDB?retryWrites=true&w=majority";

const connectDB = async () => {
    await mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('db connected');
};

module.exports = connectDB;
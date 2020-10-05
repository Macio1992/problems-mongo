const express = require('express');
const connectDB = require('./DB/Connection');
const app = express();
const cors = require('cors');

const Port = process.env.Port || 8080;

connectDB();
app.use(cors());
app.use(express.json());
app.use('/api/problems', require('./Api/Problem'));
app.use('/api/categories', require('./Api/Category'));

app.listen(Port, console.log(`Server started on port: ${Port}`));

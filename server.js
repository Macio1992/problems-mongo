const express = require('express');
const connectDB = require('./DB/Connection');
const app = express();

const Port = process.env.Port || 3000;

connectDB();
app.use(express.json());
app.use('/api/problems', require('./Api/Problem'));

app.listen(Port, console.log(`Server started on port: ${Port}`));
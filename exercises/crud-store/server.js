const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/inventory', require('./routes/inventory'));

mongoose.connect("mongodb://localhost/inventory", err => {
    if (err) throw err;
    console.log("Connected to the database.");
})

app.listen(port, () => {
    console.log(`Server is running on ${port}.`);
})

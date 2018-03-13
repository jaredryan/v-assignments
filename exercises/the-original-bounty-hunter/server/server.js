const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/bounties", require('./routes/bounties'));

mongoose.connect("mongodb://localhost/bounties", err => {
    if (err) throw err;
    console.log("Connected to the database.");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
})

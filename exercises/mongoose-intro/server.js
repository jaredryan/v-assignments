const express = require('express');
const app = express();
const port = process.env.PORT || 7000;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const character = require('./models/character');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/characters", require("./routes/character"))
// app.use("/levels", require("./routes/level"))

mongoose.connect("mongodb://localhost/mario-kart", (err) => {
    if (err) throw err;
    console.log("Connected to the database");
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

const express = require('express')
const bodyParser = require('body-parser')
const app = express();

// Middleware 0
app.use(morgan("dev"));
app.use(bodyParser.json())

// Middleware 1
app.use((req, res, next) => {
    console.log("Hey i'm middle ware");
    next();
})

// Middleware 2
app.use((req, res, next) => {
    console.log("Hey i'm also middle ware");
    next();
})

// Routes
app.use("/boardgames", require('./routes/boardgames'));
app.use("/videogames", require('./routes/videogames'));

// Fake database

const portNumber = 5050;
app.listen(portNumber, () => {
    console.log(`Server is running on port ${portNumber}.`);
});

const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid/v1');

const app = express();

app.use(bodyParser.json());

const fruit = [
    {
        type: "banana",
        brand: "chiquita",
        price: 0.5,
        id: 1
    },
    {
        type: "apple",
        brand: "gala",
        price: 0.5,
        id: 2
    },
    {
        type: "orange",
        brand: "naval",
        price: 0.75,
        id: 3
    },
];

app.get("/fruit", (req, res) => {
    let filteredFruit = fruit.slice();
    for (let property in req.query) {
        filteredFruit = filteredFruit.filter(fruit => fruit[property] === req.query[property])
    }
    return res.send(filteredFruit);
});

app.get("/fruit/:id", (req, res) => {
    return res.send(fruit.find(fruit => req.params.id === fruit.id));
});

app.listen(7000, () => {
    console.log("Server is running on port 7000.");
})

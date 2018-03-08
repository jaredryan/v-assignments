const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const uuid = require('uuid/v1');  // just because we don't have a database right now

app.use(bodyParser.json());

// simulated database
const sports = [
    {name: "tennis", type: "individual"},
    {name: "football", type: "team"},
    {name: "chess", type: "individual"}
]

app.get("/sports", (req, res) => {
    res.send(sports)
})

app.post("/sports", (req, res) => {
    req.body.id = uuid(); // just because we don't have a database right now
    sports.push(req.body);
    return res.send(req.body);
})


app.listen(5000, () => {
    console.log("Server 5000 is running.");
})

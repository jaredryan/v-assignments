const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid/v1');

const app = express();

app.use(bodyParser.json());

const bounties = [
    {
        id: uuid(),
        firstName: "Luke",
        lastName: "Groundcrawler",
        living: true,
        bountyAmount: 9999,
        type: "Jedi",
    },
    {
        id: uuid(),
        firstName: "Darth",
        lastName: "Dark",
        living: false,
        bountyAmount: 100,
        type: "Sith",
    }
];

app.get("/bounties", (req, res) => {
    res.send(bounties);
});

app.get("/bounties/:id", (req, res) => {
    const foundBounty = bounties.find(bounty => bounty.id === req.params.id)
    return res.send(foundBounty);
});

app.post("/bounties", (req, res) => {
    req.body.id = uuid();
    bounties.push(req.body);
    return res.send(req.body);
});

app.put("/bounties/:id", (req, res) => {
    const foundBounty = bounties.find(bounty => bounty.id === req.params.id)
    for (let property in req.body) {
        foundBounty[property] = req.body[property]
    }
    return res.send(foundBounty);
});

app.delete("/bounties/:id", (req, res) => {
    const foundBountyIndex = bounties.findIndex(bounty => bounty.id === req.params.id)
    const deletedBounty = bounties[foundBountyIndex]
    bounties.splice(foundBountyIndex, 1)
    return res.send(deletedBounty)
})

app.listen(4000, () => {
    console.log("Server is running on port 4000.");
})

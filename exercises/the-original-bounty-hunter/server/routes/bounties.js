const express = require('express');
const bountyRoutes = express();
const Bounty = require('../models/bounty');

bountyRoutes.get("/", (req, res) => {
    Bounty.find((err, bounties) => {
        if (err) return res.status(500).send(err);
        return res.send(bounties);
    });
});

bountyRoutes.get("/:id", (req, res) => {
    Bounty.findById(req.params.id, (err, bounty) => {
        if (err) return res.status(500).send(err);
        return res.send(bounty);
    })
});

bountyRoutes.post("/", (req, res) => {
    const newBounty = new Bounty(req.body);
    newBounty.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(201).send(newBounty);
    })
});

bountyRoutes.put("/:id", (req, res) => {
    Bounty.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedBounty) => {
        console.log(req.params.id);
        if (err) return res.status(500).send(err);
        return res.send(updatedBounty)
    })
});

bountyRoutes.delete("/:id", (req, res) => {
    Bounty.findByIdAndRemove(req.params.id, (err, removedBounty) => {
        console.log(req.params.id);
        if (err) return res.status(500).send(err);
        return res.status(202).send(removedBounty);
    })
})

module.exports = bountyRoutes

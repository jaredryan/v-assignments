const express = require('express');
const inventoryRoutes = express();
const Inventory = require('../models/inventory')

inventoryRoutes.get("/", (req, res) => {
    Inventory.find((err, inventory) => {
        if (err) return res.status(500).send(err);
        return res.send(inventory);
    })
})

inventoryRoutes.get("/:id", (req, res) => {
    Inventory.findById(req.params.id, (err, item) => {
        if (err) return res.status(500).send(err);
        return res.send(item);
    })
})

inventoryRoutes.post("/", (req, res) => {
    const newItem = new Inventory(req.body);
    newItem.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(201).send(newItem);
    })
})

inventoryRoutes.put("/:id", (req, res) => {
    Inventory.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedItem) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedItem);
    })
})

inventoryRoutes.delete("/:id", (req, res) => {
    Inventory.findByIdAndRemove(req.params.id, (err, deletedItem) => {
        if (err) return res.status(500).send(err);
        return res.status(204).send(deletedItem)
    })
})

module.exports = inventoryRoutes;

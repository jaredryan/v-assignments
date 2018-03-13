const express = require("express");
const videogameRoutes = express.Router();

videogameRoutes.get("/", (req, res) => {
    return res.send(videogames)
})

videogameRoutes.get("/:id", (req, res) => {
    boardgames.find(videogame => videogame.id === req.params.id)
    return res.send(videogame);
})

videogameRoutes.post("/", (req, res) => {
    // req.body.id = newID
    // add to database
    return res.send(req.body);
})

videogameRoutes.put("/:id", (req, res) => {
    const videogame = videogames.find(videogame => videogame.id === req.params.id)
    for (let key in req.body) {
        videogame[key] = req.body[key]
    }
    // add to database
    return res.send(videogame);
})

videogameRoutes.delete("/:id", (req, res) => {
    const videogameIndex = videogames.findIndex(videogame => videogame.id === req.params.id)
    // remove from database
    // videogames.splice(videogameIndex, 1)
    return res.send("It's been removed");
})


module.exports = videogameRoutes;

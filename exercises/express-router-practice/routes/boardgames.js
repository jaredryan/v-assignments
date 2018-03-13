const express = require("express");
const boardgameRoutes = express.Router();

boardgameRoutes.get("/", (req, res) => {
    return res.send(boardgames)
})

boardgameRoutes.get("/:id", (req, res) => {
    boardgames.find(boardgame => boardgame.id === req.params.id)
    return res.send(boardgame);
})

boardgameRoutes.post("/", (req, res) => {
    req.body.id = newID
    // add to database
    return res.send(req.body);
})

boardgameRoutes.put("/:id", (req, res) => {
    const boardgame = boardgames.find(boardgame => boardgame.id === req.params.id)
    for (let key in req.body) {
        boardgame[key] = req.body[key]
    }
    // add to database
    return res.send(boardgame);
})

boardgameRoutes.delete("/:id", (req, res) => {
    const boardgameIndex = boardgames.findIndex(boardgame => boardgame.id === req.params.id)
    // remove from database
    // boardgames.splice(boardgameIndex, 1)
    return res.send("It's been removed");
})

module.exports = boardgameRoutes;

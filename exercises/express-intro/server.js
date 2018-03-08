const express = require('express');
const app = express();
// Fake database
const sports = [
    {name: "tennis"},
    {name: "football"}
]

app.get("/sports", (req, res) => {
    res.send(sports)
    // // For when we have a database
    // Sport.find((err, sports) => {
    //     if (err) return res.status(500).send(err);
    //     return res.send(sports)
    // });
});
// app.post
// app.put
// app.delete

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});

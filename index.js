const express = require("express");
const app = express();

const port = 5000;

app.get("/", (req, res) =>{
    res.send("Hy Vishal");
})

app.listen(port, () => {
    console.log(`its working on ${port}`)
});
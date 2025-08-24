const express = require("express");

const app = express();

app.use("/home", (req, res) => {
    res.send("This is my home page");
});

app.use("/dashboard", (req, res) => {
    res.send("This is dashboard page");
});

app.listen(3000, () => {
    console.log("server is listening")
});
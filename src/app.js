const express = require("express");

const app = express();

// this will only handle get call to /user
app.get("/user", (req, res) => {
    res.send({firstName: "chai", lastName: "pan"})
})

app.post("/user", (req, res) => {
    res.send("user deleted successfully");
})

// this will match all the htp method api calls to /home
app.use("/home", (req, res) => {
    res.send("This is my home page");
});

app.listen(3000, () => {
    console.log("server is listening")
});
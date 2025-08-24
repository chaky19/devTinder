const express = require("express");

const app = express();

// this will only handle get call to /user
// app.get(/.*fly$/, (req, res) => {
//     res.send({firstName: "chai", lastName: "pan"})
// })

// b is optional here, /ac /abc
// app.get("/ab*c", (req, res) => {
//     res.send({firstName: "chai", lastName: "pan"})
// });

app.get("/user/:userId/:name/:password", (req, res) => {
    console.log(req.params)

    res.send({firstName: "chai", lastName: "pan"})
})


app.get("/poster", (req, res) => {
    console.log(req.query)
    res.send({firstName: "chai", lastName: "pan"})
})


app.post("/user", (req, res) => {
    res.send("user deleted successfully");
});

// this will match all the htp method api calls to /home
app.use("/home", (req, res) => {
    res.send("This is my home page");
});

app.listen(3000, () => {
    console.log("server is listening")
});
const express = require("express");

const app = express();

const {adminAuth, userAuth} = require("./middlewares/auth")

// this will only handle get call to /user
// app.get(/.*fly$/, (req, res) => {
//     res.send({firstName: "chai", lastName: "pan"})
// })

// b is optional here, /ac /abc
// app.get("/ab*c", (req, res) => {
//     res.send({firstName: "chai", lastName: "pan"})
// });

// app.get("/user/:userId/:name/:password", (req, res) => {
//     console.log(req.params)

//     res.send({firstName: "chai", lastName: "pan"})
// })


// app.get("/poster", (req, res) => {
//     console.log(req.query)
//     res.send({firstName: "chai", lastName: "pan"})
// })


// app.post("/user", (req, res) => {
//     res.send("user deleted successfully");
// });

// this will match all the htp method api calls to /home
// app.use("/home", (req, res) => {
//     res.send("This is my home page");
// });

// app.use("/route", rh1, [rh2, rh3], rh4)
// app.use("/user", (req, res, next) => {
//     // res.send("Response 1");
//     next();
// },
// (req, res, next) => {
//     res.send("Response 2");
// }

// )

app.use("/admin", adminAuth);
app.use("/user", userAuth);

app.get(
    "/user/details", 
    (req, res, next) => {
       res.send("Response send for user details")
    }
)

app.get(
    "/admin/details", 
    (req, res, next) => {
       res.send("Response send for admin details")
    }
)


app.get("/get-user-data", (req, res) => {
    throw new Error("sjadajks")
    // try {
    //     res.send("user data sent")
    // } catch (error) {
    //     res.status(500).send("something went wrong")
    // }
})

app.use("/", (err, req, res, next) => {
    if(err) {
        res.status(500).send("something went wrong")
    }
} )


app.listen(3000, () => {
    console.log("server is listening")
});
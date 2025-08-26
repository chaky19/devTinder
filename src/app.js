const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user")

const app = express();

// this route handlerer will be called on every request that comes to the server
// app.use(() => {})
// this will be called on only this route    
// app.use("/test", () => {})

app.use(express.json());

app.post("/signup", async (req, res) => {
    //creating a new instance of user model
    const user = new User(req.body);

    // data is saved in db
    try {
        await user.save();
        res.status(200).send("user added successfuly")
    } catch (error) {
        res.status(500).send("error saving the user:" + error.message)
    }
})

// get user by email

app.get("/user", async (req, res) => {
    const email = req.body.emailId;

    try {
        const user = await User.findOne({emailId: email});
        if (!user) {
            res.status(404).send("User not found");
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send("Failed to fetch user", error)
    }
})

// feed api - get all the userrs from db
app.get("/feed", async (req, res) => {

    try {
        const users = await User.find({});
        if (users.length == 0) {
            res.status(404).send("Users not found");
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send("Failed to fetch users", error)
    }
})

connectDB()
 .then( () => 
    {
        console.log("DB connection established");
        app.listen(3000, () => {
            console.log("server is listening")
        });
    } )
 .catch( () => console.log("Failed to establish connection"))

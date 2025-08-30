const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const {validateSignUpData} = require("./utils/validate");
const bcrypt = require("bcrypt");
const cookieParser = require('cookie-parser');


const app = express();

// this route handlerer will be called on every request that comes to the server
// app.use(() => {})
// this will be called on only this route    
// app.use("/test", () => {})

app.use(express.json());
// to read a cookie you need to parse the cookie
app.use(cookieParser());

app.post("/signup", async (req, res) => {
    //creating a new instance of user model

    // data is saved in db
    try {
        //validate the data
        validateSignUpData(req);

        const {password} = req.body

        //encrypt the data
        const passwordHash = await bcrypt.hash(password, 10)

        const user = new User({
            firstName, lastName, emaiIld, password: passwordHash
        });

        await user.save();
        res.status(200).send("user added successfuly")
    } catch (error) {
        res.status(500).send("error saving the user:" + error.message)
    }
})

app.post("/login", async(req, res) => {
    try {
        const {emailId, password} =  req.body;
        const user = await User.findOne({emailId});
        if(!user) {
            throw new Error("Invalid credentials");
        }
        const isPasswordValid =  await user.verifyPassword(password);
        if(isPasswordValid) {
            const token = await user.getJwt();
            res.cookie("token", token);
            res.send("Login successfully")
        } else {
            throw new Error("Invalid credentials")
        }

    } catch (error) {
        res.send(400).send("ERROR: ", error.message);
    }

})

app.get("/profile", userAuth, async (req, res) => {
    try {
        res.send("User profile is ", req.user)
    } catch (error) {
        res.status(500).send("Failed to fetch user profile");
    }
})

app.post("/semdC")


connectDB()
 .then( () => 
    {
        console.log("DB connection established");
        app.listen(3000, () => {
            console.log("server is listening")
        });
    } )
 .catch( () => console.log("Failed to establish connection"))

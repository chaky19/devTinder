
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req, res, next) => {

    try {
        
        const { token } = req.cookies;

        const decodedMessage = await jwt.verify(token, 'DEV@Tinder$7098');

        if(!decodedMessage) {
            throw new Error("Token is not valid");
        }

        const { _id } = decodedMessage;

        const user = await User.findById(_id);

        if(!user) {
            throw new Error("User doesn't exist");
        }

        req.user = user;

        next();
        
    } catch (error) {
        res.status(400).send("ERROR: ", error.message)
    }

}

module.exports = {
    userAuth
}
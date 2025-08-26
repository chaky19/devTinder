const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const db = await mongoose.connect('mongodb+srv://chaitanya07:pandey1993@namstenode.8gq2r.mongodb.net/devTinder');
        console.log("MongoDB connection established successfully", db.connection.host)

    } catch (error) {
        console.log("Failed to connect MongoDB", error)
        process.exit(1);
    }
}

module.exports = connectDB;
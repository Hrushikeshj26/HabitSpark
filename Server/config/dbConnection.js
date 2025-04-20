const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        const connect = await mongoose.connect("mongodb+srv://habitspark01:1BMv51tTs2yYBQXK@team.ymo8m.mongodb.net/habits-backend?retryWrites=true&w=majority&appName=Team");
        console.log("Database connected: ", connect.connection.host, connect.connection.name);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDb;
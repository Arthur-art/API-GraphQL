const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    age: String,
    email: String
});

module.exports = mongoose.model("User", UserSchema);
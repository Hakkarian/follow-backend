const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    tweets: {
        type: Number,
        required: true,
    },
    followers: {
        type: Number,
        required: true
    },
    avatar: {
        type: String,
        required: true
    }
})

const User = mongoose.model("users", userSchema);


module.exports = User;
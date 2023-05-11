const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 6,
            max: 64,
        },
        role: {
            type: String,
            default: "Subscriber",
        },
        image: {
            public_id: String,
            url: String,
        },
        resetCode: String,
    },
    { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);
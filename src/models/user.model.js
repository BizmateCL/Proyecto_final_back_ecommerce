const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    country: {
        type: String,
        default: ""
    },
    address: {
        type: String,
        default: ""
    },
    zipcode: {
        type: Number,
        default: 0
    },
    cart: {
        type: mongoose.Types.ObjectId,
        ref: "Cart",
        default: []
    }
}, {
    timestamps: true
})
const User = mongoose.model("User", userSchema)

module.exports = User
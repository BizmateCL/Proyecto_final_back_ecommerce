const mongoose = require('mongoose');
const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true 
        },
        email: {
            type: String,
            required: true,
            unique: true 
        },
        password: {
            type: String,
            required: true
        }
    },
    { timestamps: true }//propiedad de mongoose que agrega la fecha de creacion y actualizacion
);

const User=mongoose.model('User',userSchema);
module.exports = User;

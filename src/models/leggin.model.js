const mongoose = require('mongoose');
const legginSchema = mongoose.Schema({
        idProd: {
            type: String,
            required: true
        },
        priceID: {
            type: String,
            required: true
        },
        currency: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            required: true,
            unique: true
        },
        name: {
            type: String, 
            required: true
            },
        price: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Leggin = mongoose.model('Leggin', legginSchema);
module.exports = Leggin;
const mongoose = require('mongoose');
const legginSchema = mongoose.Schema({
        name: {
            type: String,
            required: true//valida que el nombre de del producto pasa a la db. Es decir , es obligatorio
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
    }//propiedad de mongoose que agrega la fecha de creacion y actualizacion
)

const Leggin = mongoose.model('Leggin', legginSchema);
module.exports = Leggin;
const mongoose = require('mongoose');
const guitarSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true//valida que el nombre de la guitarra pasa a la db. Es decir , es obligatorio
        },

        price: {
            type: Number,
            required: true
        }
    },
    { 
        timestamps: true
    }//propiedad de mongoose que agrega la fecha de creacion y actualizacion
);

const Guitar=mongoose.model('Guitar', guitarSchema);
module.exports = Guitar;

//crear un archivo llamado user.model.js y utilizando una estructura similar a la de guitarra, crea un esquema
// para un usuario con las propiedades username, email y password las cuales deben ser requeridas.
//tambien agrega el timestamps
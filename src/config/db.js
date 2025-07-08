const mongoose= require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);//obtenemos el valor a traves de variables de entorno
        console.log('Conectado a la base de datos');
    } catch (error) {
        console.error('Error al conectar con MongoDB:', error.message);
        process.exit(1); // en caso de error con la bd
    }
}

module.exports = connectDB;
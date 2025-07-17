require('dotenv').config(); //cargar las variables de entorno desde el archivo .env
//Importaciones


const express = require("express"); //tiene que ver con las rutas de la api.
const cors = require("cors"); 
const cookieParser = require("cookie-parser"); //middleware para manejar cookies
const connectDB = require("./config/db"); //conectar a la base de datos
const userRouter= require('./routes/user.routes');
const guitarRouter= require('./routes/guitar.routes');//importar las rutas de guitarra
const legginRouter= require('./routes/leggin.routes');//importar las rutas de leggin
const cartRouter = require('./routes/cart.routes');
//Middlewares
//variables de entorno

require("dotenv").config();

const PORT = process.env.PORT || 5000; //puerto por defecto
const User = require("./models/user.model"); //importar el modelo de usuario
const Guitar = require("./models/guitar.model"); 
const Leggin = require("./models/leggin.model"); 
//middleware
const app = express(); 
connectDB();

//Habilitar CORS
//con cors configuro quienes pueden acceder a mi api
const isProd = process.env.NODE_ENV === 'production'; 
const allowedOrigins = isProd 
  ? process.env.FRONTEND_URL_PROD // Frontend desplegada
  : process.env.FRONTEND_URL_DEV;




app.use(
  cors({
    origin:allowedOrigins,
    credentials: true, // Permitir credenciales (cookies, autenticación)

}
))
app.use(cookieParser()); // usar el middleware de cookie-parser
app.use(express.json()); 




app.use('/api/users',userRouter)//localhost:3000/api/users
app.use('/api/guitars',guitarRouter)//localhost:3000/api/guitars
app.use('/api/leggins',legginRouter)//localhost:3000/api/leggins
app.use('/api/carts', cartRouter); // localhost:3000/api/carts

app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto " + PORT); 
}); 

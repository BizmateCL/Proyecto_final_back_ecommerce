require("dotenv").config();
const express = require("express"); //tiene que ver con las rutas de la api.
const cors = require("cors"); 
const connectDB = require("./config/db"); //conectar a la base de datos
const userRouter= require('./routes/user.routes');
const guitarRouter= require('./routes/guitar.routes');//importar las rutas de guitarra
const legginRouter= require('./routes/leggin.routes');//importar las rutas de leggin

const PORT = process.env.PORT || 5000; //puerto por defecto
const User = require("./models/user.model"); //importar el modelo de usuario
const Guitar = require("./models/guitar.model"); 
const Leggin = require("./models/leggin.model"); 
//middleware
const app = express(); 
connectDB();
app.use(cors())

app.use(express.json()); 
app.use('/api/users',userRouter)//localhost:3000/api/users
app.use('/api/guitars',guitarRouter)//localhost:3000/api/guitars
app.use('/api/leggins',legginRouter)//localhost:3000/api/leggins

app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto " + PORT); 
}); 

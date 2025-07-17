const User = require("../models/user.model");
const Cart = require("../models/cart.model");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

//crear usuario
exports.createUser = async (req, res) => {
  // obtener usuario, email y password de la petición
  const { username, email, password } = req.body;
  try {
    // Generemos un fragmento aleatorio para usarse con el password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const newCart = await Cart.create({});
    const respuestaDB = await User.create({
      username,
      email,
      password: hashedPassword,
      cart: newCart
    });
    // usuario creado
    return res.json(respuestaDB);
  } catch (error) {
    return res.status(400).json({
      msg: error,
    });
  }
};
//iniciar sesion
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let foundUser = await User.findOne({ email }); //busca el usuario por email
    if (!foundUser) {
      return res.status(404).json({ message: "Usuario no encontrado" }); //status 404 error del server
    }
    const isValidPassword = await bcryptjs.compare(
      password,
      foundUser.password
    ); //compara la contraseña que viene en el body con la que esta hasheada(encriptada), es decir la que viene de la bd.
    if (!isValidPassword) {
      return res
        .status(400)
        .json({ message: "usuario o Contraseña no corresponden" });
    }
    const payload = {
      user: {
        id: foundUser._id,
      },
    };
    //aqui se va a crear la firma : JWT, jason web token.
    jwt.sign(
      payload,
      process.env.SECRET,
      {
        expiresIn: "1d", //el token exira en un dia
      },
      (error, token) => {
        if (error) throw error;
        const isProd =process.env.NODE_ENV === 'production';
        res. //responde con el token. El token viajara por una cookie no por html
          cookie('token',token,{
          httpOnly: true, 
          secure: isProd,
          sameSite: isProd ? 'none' : 'lax', // 'none' para producción, 'lax' para desarrollo
          maxAge: 24 * 60 * 60 * 1000 // 24 horas en milisegundos
        })
        .json({msg: "Login successful"})
      }
    );
  } catch (error) {
    res.json({
      message: "error al iniciar sesion",
      error,
    });
  }
};
//VERIFICAR USUARIO
exports.verifyUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json({ user }); 
  } catch (error) {
    res.status(500).json({
      msg: "hubo un error al consultar el usuario",
      error,
    });
  }
};
//actualizar usuario

exports.updateUser = async(req, res) => {
  const newDataForOurUser = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      newDataForOurUser,
      { new: true }
    ).select("-password");

    res.json({
      msg: "Usuario actualizado con éxito.",
      data: updatedUser,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      msg: "Hubo un error actualizando el usuario.",
    });
  }
};






//obtener todos los usuarios
// app.get("/users", async (req, res) => {
//   try {
//     const users = await User.find({}); //busca todos los usuarios
//     return res.status(200).json({ users }); //devuelve el estado 200 y los usuarios
//   } catch (error) {
//     return res.status(500).json({
//       message: "Error al obtener los usuarios",
//       error: error.message, //dato tecnico con info del error
//     }); //status 500 error del server
//   }
// });
//Logout es borrar la cookie
exports.logout = (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax'
  })
  return res.json({ msg: 'Logout sucessful' });
}

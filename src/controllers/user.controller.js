const User = require("../models/user.model");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

//crear usuario
exports.createUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Verificar si ya existe un usuario con ese email o username
    const existingUser = await User.findOne({
      $or: [{ email }, { username }],
    });
    if (existingUser) {
      return res.status(400).json({ message: "Usuario ya existe" });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    return res.status(200).json({ newUser });
  } catch (error) {
    return res.status(500).json({
      message: "Hubo un error al crear usuario",
      error: error.message,
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
        expiresIn: "1h",
      },
      (error, token) => {
        if (error) throw error;
        res.json({ token }); //devuelve el token
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
exports.updateUserById = async (req, res) => {
 const { username, email, password } = req.body;
  try {
    let updateFields = { username, email };

    // Si se envía un nuevo password, hashearlo
    if (password) {
      const salt = await bcryptjs.genSalt(10);
      updateFields.password = await bcryptjs.hash(password, salt);
    }

    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      updateFields,
      { new: true, runValidators: true }
    );
    if (!updateUser) {
      return res.status(404).json({
        message: "Usuario no encontrado",
      });
    }
    return res.status(200).json({ updateUser });
  } catch (error) {
    return res.status(500).json({
      message: "Hubo un error actualizando el usuario",
      error: error.message,
    });
  }
}
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

const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  let token = req.cookies.token;//e obtiene desde la cookie

  if (!token) {
    return res.status(401).json({ message: "Acceso no autorizado" }); //status 401 error del server
  }
  try {
    const openToken = jwt.verify(token, process.env.SECRET); //verificar el token con la clave secreta
    req.user = openToken.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Invalid or expired token", error });
  }
};

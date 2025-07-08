const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    let{ authorization } = req.headers; //obtener el token del header de la peticion
    if (!authorization) {
        return res.status(401).json({ message: 'Acceso no autorizado' }); //status 401 error del server
    }
    try{
        let [type, token] = authorization.split(' '); //generar un arreglo con prefijo (bearer)y el valor del token.
        if(type === 'Token' || type === 'Bearer') {
           const openToken = jwt.verify(token, process.env.SECRET); //verificar el token con la clave secreta
            req.user = openToken.user;
            next();
        }else{
            return res.status(401).json({ message: 'el tipo de token no corresponde' }); 

        }
        
    } catch (error) {
        res.json({msg:'Ocurrio un error al intentar verificar usuario'})
    }

}
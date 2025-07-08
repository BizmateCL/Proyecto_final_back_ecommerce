const Leggin = require("../models/leggin.model");

//funcion crear leggin
exports.createLeggin = async (req, res) => {
  const { name, price,description,img } = req.body; 
  try {
    const newLeggin = await Leggin.create({ name, price,description,img }); //crea un nuevo leggin con los datos que vienen del body
    return res.status(200).json({ newLeggin }); //devuelve el estado 200 y los leggins
  } catch (error) {
    return res.status(500).json({
      message: "Hubo un error al crear el leggin",
      error: error.message, //dato tecnico con info del error
    }); //status 500 error del server
  }
};
//actualizar leggin por ID

exports.updateLegginById = async (req, res) => {
  const { name, price,description,img } = req.body; 
   try {
    const updateLeggin = await Leggin.findByIdAndUpdate(
      req.params.id,
      { name, price,description,img },
      { new: true, runValidators: true }
    );
    if (!updateLeggin) {
      return res.status(404).json({message: "Leggin no encontrado",
      }); 
    }
    return res.status(200).json({ updateLeggin }); 
  } catch (error) {
    return res.status(500).json({
      message: "Hubo un error actualizando el leggin",
      error: error.message,
    });
  }
};
//eliminar leggin por ID
exports.deleteLegginById = async (req, res) => {
  try {
    const deletedLeggin = await Leggin.findByIdAndDelete(req.params.id); //busca todos los leggins
    if (!deletedLeggin) {
      return res.status(404).json({ message: "Leggin no encontrado" });
    }
    return res.status(200).json({ deletedLeggin }); //devuelve el estado 200 y los leggins
  } catch (error) {
    return res.status(500).json({
      message: "Hubo un error al eliminar el leggin",
      error: error.message,
    });
  }
}
//obtener todos los leggins

exports.getAllLeggins = async (req, res) => {
  try {
    const leggins = await Leggin.find({}); //busca todos los leggins
    return res.status(200).json({ leggins }); //devuelve el estado 200 y los leggins
  } catch (error) {
    return res.status(500).json({
      message: "Error al obtener los leggins",
      error: error.message,
    }); 
  }
};

//Funcion de buscar leggin por ID

// Buscar leggin por ID
exports.getLegginById = async (req, res) => {
  try {
    const leggin = await Leggin.findById(req.params.id);
    if (!leggin) {
      return res.status(404).json({ message: "Leggin no encontrado" });
    }
    return res.status(200).json({ leggin });
  } catch (error) {
    return res.status(500).json({
      message: "Error al obtener el leggin",
      error: error.message,
    });
  }
};
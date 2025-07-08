const Guitar = require("../models/guitar.model");
//const bcryptjs = require("bcryptjs");
//const jwt = require("jsonwebtoken");

//obtener todas las guitarras
exports.getAllGuitars = async (req, res) => {
  try {
    const guitars = await Guitar.find({}); //busca todas las guitarras
    return res.status(200).json({ guitars }); //devuelve el estado 200 y las guitarras
  } catch (error) {
    return res.status(500).json({
      message: "Error al obtener las guitarras",
      error: error.message, //datot tecnico con info del error
    }); //status 500 error del server
  }
};

//funcion crear guitarra
exports.createGuitar = async (req, res) => {
  const { name, price } = req.body; //desestructuracion de los datos que vienen del body
  try {
    const newGuitar = await Guitar.create({ name, price }); //busca todas las guitarras
    return res.status(200).json({ newGuitar }); //devuelve el estado 200 y las guitarras
  } catch (error) {
    return res.status(500).json({
      message: "Hubo un error al crear la guitarra",
      error: error.message, //dato tecnico con info del error
    }); //status 500 error del server
  }
};
//funcion actualizar guitarra
exports.updateGuitarById = async (req, res) => {
  const { name, price } = req.body; 
   try {
    const updateGuitar = await Guitar.findByIdAndUpdate(
      req.params.id,
      { name, price },
      { new: true, runValidators: true }
    );
    if (!updateGuitar) {
      return res.status(404).json({message: "Guitarra no encontrada",
      }); 
    }
    return res.status(200).json({ updateGuitar }); 
  } catch (error) {
    return res.status(500).json({
      message: "Hubo un error actualizando la guitarra",
      error: error.message,
    });
  }
};
//funcion eliminar guitarra
exports.deleteGuitarById = async (req, res) => {
  try {
    const deletedGuitar = await Guitar.findByIdAndDelete(req.params.id); //busca todas las guitarras
    if (!deletedGuitar) {
      return res.status(404).json({ message: "Guitarra no encontrada" });
    }
    return res.status(200).json({ deletedGuitar }); //devuelve el estado 200 y las guitarras
  } catch (error) {
    return res.status(500).json({
      message: "Hubo un error al eliminar la guitarra",
      error: error.message, 
    }); 
  }
}

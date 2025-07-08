const express=require('express');
const{getAllGuitars, createGuitar,updateGuitarById,deleteGuitarById} = require('../controllers/guitar.controller');
const guitarRouter = express.Router();

guitarRouter.get('/',getAllGuitars);//localhost:3000/api/guitars
guitarRouter.post('/create',createGuitar);//localhost:3000/api/guitars
guitarRouter.put('/:id',updateGuitarById);//localhost:3000/api/guitars/id
guitarRouter.delete('/:id',deleteGuitarById);//localhost:3000/api/guitars/id

module.exports = guitarRouter;




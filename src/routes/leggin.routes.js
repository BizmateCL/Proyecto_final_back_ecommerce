const express=require('express');
const{ createLeggin, getLegginById, updateLegginById, deleteLegginById, getAllLeggins} = require('../controllers/leggin.controller');
const legginRouter = express.Router();

legginRouter.get('/',getAllLeggins);//localhost:3000/api/leggins
legginRouter.get('/:id',getLegginById);//localhost:3000/api/leggins/id
legginRouter.post('/create',createLeggin);//localhost:3000/api/leggins/create
legginRouter.put('/:id',updateLegginById);//localhost:3000/api/leggins/id
legginRouter.delete('/:id',deleteLegginById);//localhost:3000/api/leggins/id

module.exports = legginRouter;

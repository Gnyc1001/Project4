const express = require('express');
const favlistingRoutes = express.Router();
const favlistingController = require('../controllers/favlisting-controller');

//show all listing by user id
favlistingRoutes.get('/', favlistingController.findAll);
//show one listing
favlistingRoutes.post('/:id', favlistingController.findOne);
favlistingRoutes.post('/', favlistingController.create);
favlistingRoutes.delete('/:id',favlistingController.delete);
favlistingRoutes.put('/;id', favlistingController.update);

module.exports = favlistingRoutes;
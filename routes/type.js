const typeRouter = require('express').Router();
const typeController = require('../controllers/type');
typeRouter.get('/', typeController.getTypes);

module.exports = typeRouter;
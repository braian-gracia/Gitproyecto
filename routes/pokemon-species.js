const speciesRouter = require('express').Router();
const speciesController = require('../controllers/pokemon-species');
speciesRouter.get('/', speciesController.getSpecies);

module.exports = speciesRouter;
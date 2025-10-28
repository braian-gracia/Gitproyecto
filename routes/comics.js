const comicsRouter = require('express').Router();
const comicsController = require('../controllers/comics');
 comicsRouter.get('/todo', comicsController.getComics);

module.exports = comicsRouter;
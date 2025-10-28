const router = require('express').Router();
const comicsController = require('../controllers/comics');

router.get('/todo', comicsController.getComics);

module.exports = router;
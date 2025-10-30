const abilityRouter = require('express').Router();
const abilitycontroller = require('../controllers/ability');
abilityRouter.get('/todo', abilitycontroller.getability);

module.exports = abilityRouter;
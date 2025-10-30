const speciesController = {};

const axios = require('axios');

speciesController.getSpecies = (req, res) => {
  const POKEMON_API = process.env.POKEMON_API

  axios.get(POKEMON_API + '/pokemon-species')
    .then(resp => {res.json(resp.data);})
}

module.exports = speciesController;
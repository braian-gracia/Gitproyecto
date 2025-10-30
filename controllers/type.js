const typeController = {};

const axios = require('axios');

typeController.getTypes = (req, res) => {
  const POKEMON_API = process.env.POKEMON_API

  axios.get(POKEMON_API + '/type')
    .then(resp => {res.json(resp.data);})
}

module.exports = typeController;
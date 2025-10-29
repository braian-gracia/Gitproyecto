const comicsController = {};

const axios = require('axios');

comicsController.getComics = (req, res) => {
  const POKEMON_API = process.env.POKEMON_API

  axios.get(POKEMON_API + '/pokemon')
    .then(resp => {res.json(resp.data);})
}

module.exports = comicsController;
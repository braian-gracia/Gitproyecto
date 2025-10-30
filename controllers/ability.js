const abilitycontroller = {};

const axios = require('axios');

abilitycontroller.getability = (req, res) => {
  const POKEMON_API = process.env.POKEMON_API

  axios.get(POKEMON_API + '/ability')
    .then(resp => {res.json(resp.data);})
}

module.exports = abilitycontroller;
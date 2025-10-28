const comicsController = {};

comicsController.getComics = (req, res) => {
  res.json({ message: 'hola mundano!' });
}

module.exports = comicsController;
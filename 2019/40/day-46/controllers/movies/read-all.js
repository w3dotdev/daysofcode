const movie = require('../../models/movie');

module.exports = async (req, res) => {
  await movie.getMovies()
  .then(movies => res.json(movies))
  .catch(err => {
    if (err.status) {
      res.status(err.status).json({ message: err.message })
    } else {
      res.status(500).json({ message: err.message })
    }
  })
};

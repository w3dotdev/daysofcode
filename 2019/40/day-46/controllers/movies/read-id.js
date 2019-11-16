const movie = require('../../models/movie');

module.exports = async (req, res) => {
  const id = req.params.id

  await movie.getMovie(id)
  .then(movie => res.json(movie))
  .catch(err => {
    if (err.status) {
      res.status(err.status).json({ message: err.message })
    } else {
      res.status(500).json({ message: err.message })
    }
  })
};

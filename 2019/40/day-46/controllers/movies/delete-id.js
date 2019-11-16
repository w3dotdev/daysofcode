const movie = require('../../models/movie');

module.exports = async (req, res) => {
  const id = req.params.id

  await movie.deleteMovie(id)
  .then(movie => res.json({
    message: `${id} deleted`
  }))
  .catch(err => {
    if (err.status) {
      res.status(err.status).json({ message: err.message })
    }
    res.status(500).json({ message: err.message })
  })
};

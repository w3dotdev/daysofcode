const movie = require('../../models/movie');

module.exports = async (req, res) => {
  const id = req.params.id

  await movie.updateMovie(id, req.body)
  .then(movie => res.json({
    message: `The movie #${id} updated`,
    content: movie
  }))
  .catch(err => {
    if (err.status) {
      res.status(err.status).json({ message: err.message })
    }
    res.status(500).json({ message: err.message })
  })
};

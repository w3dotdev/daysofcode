const movie = require('../../models/movie');

module.exports = async (req, res) => {
  await movie.insertMovie(req.body)
  .then(movie => res.status(201).json({
    message: `${movie.id} created`,
    content: movie
  }))
  .catch(err => res.status(500).json({ message: err.message }))
};

let movies = require('../mock/movies.json');
const helper = require('../helpers');

const filename = './mock/movies.json';

const getMovies = () => {
  return new Promise((resolve, reject) => {
    if (movies.length === 0) {
      reject({
        message: 'no movies available',
        status: 202
      })
    }
    resolve(movies);
  })
}

const getMovie = id => {
  return new Promise((resolve, reject) => {
    helper.verifyID(movies, id)
    .then(movie => resolve(movie))
    .catch(err => reject(err))
  })
}

const insertMovie = newMovie => {
  return new Promise((resolve, reject) => {
    const date = {
      createdAt: helper.newDate(),
      updatedAt: helper.newDate()
    }
    newMovie = { id: helper.getNewId(), ...date, ...newMovie }
    movies.push(newMovie)
    helper.writeJSONFile(filename, movies)
    resolve(newMovie)
  })
}

const updateMovie = (id, newMovie) => {
  return new Promise((resolve, reject) => {
    helper.verifyID(movies, id)
    .then(movie => {
      const index = movies.findIndex(p => p.id == movie.id)
      const date = {
          createdAt: movie.createdAt,
          updatedAt: helper.newDate()
      }
      movies[index] = { id: movie.id, ...date, ...newMovie }
      helper.writeJSONFile(filename, movies)
      resolve(movies[index])
    })
    .catch(err => reject(err))
  })
}

const deleteMovie = id => {
  return new Promise((resolve, reject) => {
    helper.verifyID(movies, id)
    .then(() => {
      movies = movies.filter(p => p.id !== id)
      helper.writeJSONFile(filename, movies)
      resolve()
    })
    .catch(err => reject(err))
  })
}

module.exports = {
  insertMovie,
  getMovies,
  getMovie,
  updateMovie,
  deleteMovie
}

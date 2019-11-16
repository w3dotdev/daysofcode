const readAll = require('./read-all');
const readId = require('./read-id');
const createId = require('./create-id');
const updateId = require('./update-id');
const deleteId = require('./delete-id');

module.exports = {
  // GET /movies
  readAll: readAll,
  // GET /movies/:id
  readId: readId,
  // POST /movies
  createId: createId,
  // PUT /movies/:id
  updateId: updateId,
  // DELETE /movies/:id
  deleteId: deleteId
};

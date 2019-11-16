const controllers = require('../controllers/movies');
const middleware = require('../middlewares');

// Movies API
module.exports = router => {
  /* GET ALL */
  router.get('/', controllers.readAll);
  /* GET ID */
  router.get('/:id', controllers.readId);
  /* CREATE */
  router.post('/', middleware.checkFields, controllers.createId);
  /* UPDATE */
  router.put('/:id', middleware.checkFields, controllers.updateId);
  /* DELETE */
  router.delete('/:id', controllers.deleteId);
}

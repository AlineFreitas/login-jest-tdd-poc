const router = require('express').Router();

const authMiddleware = require('../app/middleware/authorization');

router.get('/', (request, response) => {
  return response.send({
    message: 'You\'ve reached GET '/' endpoint on this server.',
  });
});

router.use('/signin', require('./signin'));

router.use(authMiddleware);
router.use('/dashboard', require('./dashboard'));

module.exports= router;
const router = require('express').Router();

const sessionsController = require('../app/controllers/SessionsController');

router.post('/', sessionsController.signin);

module.exports = router;
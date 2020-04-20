const router = require('express').Router();

router.get('/', (request, response) => {
  return response.status(200).send();
});

module.exports= router;
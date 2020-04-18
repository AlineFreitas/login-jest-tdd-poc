const router = require('express').Router();

router.post('/', (request, response) => {
  return response.status(200).send();
});

module.exports = router;
const router = require('express').Router();

router.post('/', (request, response) => {
  console.log(request.data);
  return response.status(200);
});

module.exports = router;
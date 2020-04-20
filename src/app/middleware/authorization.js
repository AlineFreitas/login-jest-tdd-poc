const jwt = require('jsonwebtoken');

module.exports= (request, response, next) => {
  const authHeader = request.headers.authorization;

  if(!authHeader) {
    return response.status(401).send();
  }
  return next();
}
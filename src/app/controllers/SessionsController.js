class SessionsController {
  async signin(request, response) {
    return response.status(200).send();
  }
}

module.exports = new SessionsController();
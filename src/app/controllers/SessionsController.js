const { User } = require('../models');

class SessionsController {
  async signin(request, response) {
    const { email, password } = request.body;
    const user = await User.findOne({ where: { email } });

    if(! (await user.confirmPassword(password)) ) {
      return response.status(401).send();
    }
    return response.status(200).send();
  }
}

module.exports = new SessionsController();
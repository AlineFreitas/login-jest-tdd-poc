const { User } = require('../models');

class SessionsController {
  async signin(request, response) {
    const { email, password } = request.body;
    const user = await User.findOne({ where: { email } });

    if (!user){
      return response.status(404).send();
    }

    if(! (await user.confirmPassword(password)) ) {
      return response.status(401).send();
    }

    return response.status(200).json({
      user,
      token: user.generateToken()
    });
  }
}

module.exports = new SessionsController();
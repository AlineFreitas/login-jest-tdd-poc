const factory = require('factory-girl').factory;

const { User } = require('../src/app/models');

factory.define('User', User, {
  name: 'User Example',
  email: 'user@example.com',
  password: 'password'
});

module.exports= factory;
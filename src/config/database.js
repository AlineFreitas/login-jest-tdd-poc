const path = require('path');

require('dotenv').config({
  path: process.env.NODE_ENV = "test" ? ".env.test" : ".env"
});

module.exports = {
  host: process.env.DB_HOST_ADDRESS,
  username: process.env.DB_USER_NAME,
  password: process.env.DB_USER_PASSWORD,
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT,
  storage: path.join(__dirname, '..', '..', '__tests__/', 'test.sqlite'),
  operatorsAliases: '0',
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }
};

// {
//   "development": {
//     "username": "root",
//     "password": null,
//     "database": "database_development",
//     "host": "127.0.0.1",
//     "dialect": "mysql",
//     "operatorsAliases": false
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql",
//     "operatorsAliases": false
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql",
//     "operatorsAliases": false
//   }
// }

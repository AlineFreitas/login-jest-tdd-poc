const request = require('supertest');

const app = require('../../src/app');
const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('Authorization', () => {
  let userObject = {
    name: 'Aline',
    email: 'aline@example.com',
    password: 'password'
  };
  let user;

  beforeEach(async () => {
    await truncate();
    user = await User.create(userObject);
  });
  
  it('authenticates with valid credentials', async() => {
    const response = await request(app)
    .post('/signin')
    .send({
      email: userObject.email,
      password: userObject.password
    });

    expect(response.status).toBe(200);
  });

  it('doesn\'t authenticate with invalid credentials', async() => {
    const response = await request(app)
      .post('/signin')
      .send({
        email: userObject.email,
        password: '123123'
      });

      expect(response.status).toBe(401);
  });

  it('returns 404 if no user is found with given credentials', async() => {
    const response = await request(app)
      .post('/signin')
      .send({
        email: 'non-existent@email.com',
        password: 'password'
      });

      expect(response.status).toBe(404);
  });
});
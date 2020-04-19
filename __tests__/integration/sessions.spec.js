const request = require('supertest');

const app = require('../../src/app');
const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('Authorization', () => {
  beforeEach(async () => {
    await truncate();
  });
  
  it('authenticates with valid credentials', async() => {
    const user = await User.create({
      name: 'Aline',
      email: 'aline@example.com',
      password_hash: 'password'
    });
    expect(user.email).toBe('aline@example.com')

    const response = await request(app)
    .post('/signin')
    .send({
      email: user.email,
      password: '123456'
    });
    expect(response.status).toBe(200);
  });
});
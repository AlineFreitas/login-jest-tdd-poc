const request = require('supertest');

const app = require('../../src/app');
const factory = require('../factories');
const truncate = require('../utils/truncate');

describe('Authorization', () => {
  let user;

  beforeEach(async() => {
    await truncate();
    user = await factory.create('User');
  });

  describe('/dashboard Endpoint', () => {
    it('Allows access when authenticated', async() => {
      const response = await request(app)
        .get('/dashboard')
        .set('Authorization', `Bearer: ${user.generateToken()}`);
      expect(response.status).toBe(200);
    });
  });
});
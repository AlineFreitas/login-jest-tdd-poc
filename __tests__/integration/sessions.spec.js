const request = require('supertest');

const app = require('../../src/app');
const factory = require('../factories');
const truncate = require('../utils/truncate');

describe('Sessions', () => {
  let user

  beforeEach(async () => {
    await truncate();
    user = await factory.create('User');
  });

  describe('Sign In', () => {
    describe('On success', () =>{

      it('authenticates with valid credentials', async() => {
        const response = await request(app)
        .post('/signin')
        .send({
          email: user.email,
          password: user.password
        });
    
        expect(response.status).toBe(200);
      });
  
      it('returns jwt token when sucessfully authenticated', async() => {
        const response = await request(app)
        .post('/signin')
        .send({
          email: user.email,
          password: user.password
        });
  
        expect(response.body).toHaveProperty('token');
      });
    });
  
    describe('', () => {
      it('doesn\'t authenticate with invalid credentials', async() => {
        const response = await request(app)
          .post('/signin')
          .send({
            email: user.email,
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
  });
});
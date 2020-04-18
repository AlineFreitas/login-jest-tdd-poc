const { User } = require('../../src/app/models');
const bcrypt = require('bcryptjs');

describe('User', () => {
  it('should encrypt user password', async () => {
    userObject = {
      name: 'Stella',
      email: 'strellinha@example.com',
      password: '1234567'
    };

    const user = User.create(userObject);

    const hash = bcrypt.hash(userObject.password, 16);
    const comparePassword = await bcrypt.compare(user.password_hash, hash);
    expect(comparePassword).toBe(true);
  });
});
const bcrypt = require('bcryptjs');

const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should encrypt user password', async () => {
    userObject = {
      name: 'Stella',
      email: 'strellinha@example.com',
      password: '1234567'
    };

    const user = User.create(userObject);

    const compare = await bcrypt.compare(userObject.password, user.password_hash);
    expect(compare).toBe(true);
  });
});
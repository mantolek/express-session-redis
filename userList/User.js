const bcrypt = require('bcrypt');

const users = {
  'user1@email.com': {
    pwHash: bcrypt.hashSync('user1', 10),
    id: '1111',
  },
  'user2@email.com': {
    pwHash: bcrypt.hashSync('user2', 10),
    id: '2222',
  },
};

// if we was a real database this call would be async and would return a promise
async function findUserByEmail(email) {
  const user = users[email];
  return user ? user : Promise.reject('user not found');
}

module.exports = { findUserByEmail };

const userList = require('../userList/User');
const bcrypt = require('bcrypt');

async function login(req, res) {
  console.log(bcrypt.hashSync('user1', 10));
  const { email, password } = req.body;

  // for validation use library joi
  if (!email || !password) {
    return res
      .status(400)
      .json('Bad request params - you need to provide an email and a password');
  }

  try {
    const user = await userList.findUserByEmail(email);
    if (!user) {
      return res.status(400).json({ msg: 'Something went wrong with user.' });
    }

    const match = await bcrypt.compare(password, user.pwHash);
    if (!match) {
      return res.status(400).json({ msg: 'Something went wrong with match.' });
    }

    req.session.user = user.id;

    return res.status(200).json({ ok: 'ok' });
  } catch (err) {
    // for logging use library winston
    return res.status(400).json({ msg: 'Something went wrong.' });
  }
}

module.exports = {
  login,
};

const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/Auth');
const authController = require('../controller/Auth');
const profileController = require('../controller/Profile');

router.post('/login', authController.login);

// all routes that come after this middleware are protected
// and can only be accessed if the user is logged in
// router.use(authenticate);

router.get('/profile', authenticate, profileController.profile);

module.exports = router;

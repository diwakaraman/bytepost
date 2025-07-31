const express = require('express');
const router = express.Router();
const { signupUser, getUsers } = require('../controllers/userController');

// Define routes
router.post('/signup', signupUser);
router.get('/users', getUsers);


module.exports = router;

const express = require('express');
const router = express.Router();
const { signupUser, login,getUsers } = require('../controllers/userController');

// Define routes
router.post('/signup', signupUser);
router.get('/users', getUsers);
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Logic for user login
    // This should include checking the user's credentials and returning a token
    res.status(200).json({ message: 'Login successful', token: 'dummy-token' });
  } catch (error) {
    res.status(500).json({ message: 'Login failed', error: error.message });
  }
});

module.exports = router;

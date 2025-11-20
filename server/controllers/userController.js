const User = require('../models/user');
const bcrypt = require('bcrypt');

const signupUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    console.log(username + " " + email + " " + password);
    

    if (!username || !email || !password) {
      return res.status(400).json({ success: false, error: "All fields are required" });
    }

    console.log("username: " + username);

    
    console.log("i ana here");

    console.log("Before bcrypt");
    const hashedPass = await bcrypt.hash(password, 10);

    console.log("After bcrypt");

    const newUser = new User({
      username,
      email,
      password: hashedPass,
    });
    console.log(newUser.username + " " + newUser.email + " " + newUser.password);
    

    await newUser.save();
    console.log("User saved");
    
    return res.status(201).json({ success: true, message: "User registered successfully" });

  } catch (error) {
    console.log(error);
    console.log(error.message);
    
    return res.status(500).json({ success: false, error: "Internal server error" });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json({ success: true, data: users });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Internal server error" });
  }
};


module.exports = {
  signupUser,
  getUsers,
};

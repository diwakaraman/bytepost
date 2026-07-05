const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required" });
  }

  res.json({
    token: "dummy-token-123",
    message: "Login successful",
  });
});

module.exports = router;

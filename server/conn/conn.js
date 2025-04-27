// conn.js
require("dotenv").config();
const mongoose = require("mongoose");


const conn = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Database connected");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
  }
};

module.exports = conn;

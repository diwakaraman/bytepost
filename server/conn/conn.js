const mongoose = require("mongoose");

const conn = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/bytepost");
    console.log("✅ MongoDB connected ");
  } catch (error) {
    console.error("❌ MongoDB error:", error.message);
  }
};

module.exports = conn;


const mongoose = require("mongoose");

const conn = async () => {
  try {
   
    await mongoose.connect("mongodb+srv://2023aspire53:SU8WmFJyJPpL1mqe@cluster0.rjqnv9p.mongodb.net/bytepost?retryWrites=true&w=majority");
    
    console.log("✅ Database connected");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
  }
};

module.exports = conn;
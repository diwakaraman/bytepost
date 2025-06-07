require("dotenv").config();
const express = require("express");
const conn = require("./conn/conn");
const bcrypt = require('bcryptjs'); // no issue
const app = express();
const PORT = process.env.PORT || 1000;
const cors = require("cors");
app.use(cors());
// Connect to MongoDB
console.log("MONGO_URI:", process.env.MONGODB_URI); // Add this line

conn();

// Import routes
const userApi = require("./routes/user");

// Middleware
app.use(express.json());
    cors({
  origin: "http://localhost:5173", 
  credentials: true, // Allow credentials
});
// Use routes
app.use("/api/user", userApi);

// Start server
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});

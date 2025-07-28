require("dotenv").config();
const express = require("express");
const cors = require("cors"); // ✅ Import cors
const conn = require("./conn/conn");
const bcrypt = require('bcryptjs');

const app = express();
const PORT = process.env.PORT || 1000;

// ✅ Enable CORS (Allow requests from frontend)
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL (Vite default)
  credentials: true
}));

// Middleware
app.use(express.json());

// Log Mongo URI for debugging
console.log("MONGO_URI:", process.env.MONGODB_URI);

// Connect to MongoDB
conn();

// Import routes
const userApi = require("./routes/user");

// Use routes
app.use("/api/user", userApi);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server started at http://localhost:${PORT}`);
});

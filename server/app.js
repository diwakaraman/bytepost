require("dotenv").config();
const express = require("express");
const cors = require("cors"); 
const conn = require("./conn/conn");
const bcrypt = require('bcryptjs');

const app = express();
const PORT = process.env.PORT || 1000;

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}));

app.use(express.json());

console.log("MONGO_URI:", process.env.MONGODB_URI);
conn();

const userApi = require("./routes/user");

app.use("/api/user", userApi);

app.listen(PORT, () => {
  console.log(`🚀 Server started at http://localhost:${PORT}`);
});

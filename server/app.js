require("dotenv").config();
const express = require("express");
const cors = require("cors"); 
const conn = require("./conn/conn");

const app = express();
const PORT = process.env.PORT || 1000;

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

conn();

const userApi = require("./routes/user");
app.use("/api/user", userApi);

app.listen(PORT, () => {
  console.log(`🚀 Server started at http://localhost:${PORT}`);
});

require("dotenv").config(); // Ensure environment variables are loaded first
require("./Models/db"); // Database connection should be initialized after dotenv

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRouter = require("./Routes/AuthRouter");
const bcrypt = require("bcryptjs");

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware setup
app.use(cors()); // Ensure this comes first
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log("✅ Server setup initialized");

// Test route
app.get("/", (req, res) => {
  res.send("✅ Backend is running successfully!");
});

// Health check route
app.get("/ping", (req, res) => {
  res.send("PONG");
});

// Routes
app.use("/auth", AuthRouter);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

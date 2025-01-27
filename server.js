require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Route
app.get("/", (req, res) => {
  res.send("Hello, World! This is a Node.js app deployed in the cloud!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

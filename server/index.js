const express = require("express");
require("dotenv").config();

// Express App
const app = express();

// Middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the app",
  });
});

app.listen(process.env.PORT, () => {
  console.log("Listening on port: ", process.env.PORT);
});

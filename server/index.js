require("dotenv").config();

const express = require("express");
const workoutsRoutes = require("./src/routes/routes.workouts.js");

// Express App
const app = express();

// Middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/workouts", workoutsRoutes);

// Listen to requests
app.listen(process.env.PORT, () => {
  console.log("Listening on port: ", process.env.PORT);
});

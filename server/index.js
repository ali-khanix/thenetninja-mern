require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workoutsRoutes = require('./src/routes/routes.workouts.js');

// Express App
const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use('/api/workouts', workoutsRoutes);

// Connect to db
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    // Listen to requests
    console.log('Connected to db');
    app.listen(process.env.PORT, () => {
      console.log('Listening on port: ', process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

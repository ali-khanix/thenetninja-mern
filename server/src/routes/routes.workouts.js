const express = require('express');
const Workout = require('../models/model.workout.js');

const router = express.Router();

// Get all workouts
router.get('/', (req, res) => {
  res.json({
    message: 'Get All Workouts',
  });
});

// Get a single workout
router.get('/:id', (req, res) => {
  res.json({
    message: 'GET a single workout',
  });
});

// POST a new workout
router.post('/', async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({
      title,
      load,
      reps,
    });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE a workout
router.delete('/:id', (req, res) => {
  res.json({
    message: 'DELETE a workout',
  });
});

// UPDATE a workout
router.patch('/:id', (req, res) => {
  res.json({
    message: 'UPDATE a workout',
  });
});

module.exports = router;

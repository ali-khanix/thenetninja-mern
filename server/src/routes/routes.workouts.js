const express = require('express');
const {
  createWorkout,
  getWorkouts,
  getWorkout,
} = require('../controllers/controller.workout.js');

const router = express.Router();

// Get all workouts
router.get('/', getWorkouts);

// Get a single workout
router.get('/:id', getWorkout);

// POST a new workout
router.post('/', createWorkout);

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

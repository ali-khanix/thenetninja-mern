const express = require('express');
3;

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
router.post('/', (req, res) => {
  res.json({
    message: 'POST a new workout',
  });
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

const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const {
  createWorkoutLog,
  getWorkoutLogs,
  updateWorkoutLog,
  deleteWorkoutLog,
} = require('../controllers/workout.controller');

const router = express.Router();

router.use(authMiddleware); // Protect all workout routes

router.post('/', createWorkoutLog); // Create workout log
router.get('/', getWorkoutLogs); // Get all workout logs
router.put('/:id', updateWorkoutLog); // Update workout log
router.delete('/:id', deleteWorkoutLog); // Delete workout log

module.exports = router;

const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const {
  createGoal,
  getGoals,
  updateGoal,
  deleteGoal,
} = require('../controllers/goal.controller');

const router = express.Router();

router.use(authMiddleware); // Protect all goal routes

router.post('/', createGoal); // Create a goal
router.get('/', getGoals); // Get all goals
router.put('/:id', updateGoal); // Update a goal
router.delete('/:id', deleteGoal); // Delete a goal

module.exports = router;

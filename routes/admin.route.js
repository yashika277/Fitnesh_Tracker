const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const adminMiddleware = require('../middleware/admin.middleware'); // Middleware to check admin role
const {
  getAggregateStatistics,
  getAllUsers,
  createFitnessProgram,
  getFitnessPrograms,
  updateFitnessProgram,
  deleteFitnessProgram,
} = require('../controllers/admin.controller');

const router = express.Router();

router.use(authMiddleware); // Protect all admin routes
router.use(adminMiddleware); // Only allow admin access

// Get aggregate statistics
router.get('/statistics', getAggregateStatistics);

// Manage users
router.get('/users', getAllUsers);

// Fitness program management
router.post('/programs', createFitnessProgram); // Create fitness program
router.get('/programs', getFitnessPrograms); // Get all fitness programs
router.put('/programs/:id', updateFitnessProgram); // Update fitness program
router.delete('/programs/:id', deleteFitnessProgram); // Delete fitness program

module.exports = router;

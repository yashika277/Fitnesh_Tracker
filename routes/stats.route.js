const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const { getWorkoutStatistics } = require('../controllers/stats.controller');

const router = express.Router();

router.use(authMiddleware); // Protect all stats routes

// Endpoint to get workout statistics
// router.get('/', getWorkoutStatistics);

router.get('/', async (req, res, next) => {
    try {
        await getWorkoutStatistics(req, res);
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
});


module.exports = router;

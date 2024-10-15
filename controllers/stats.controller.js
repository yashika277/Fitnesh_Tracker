const WorkoutLog = require('../models/workoutlog.model');

// Get workout statistics
const getWorkoutStatistics = async (req, res) => {
    const { startDate, endDate, activity } = req.query;

    let query = { user: req.user.id };
    if (startDate || endDate) {
        query.date = {};
        if (startDate) {
            query.date.$gte = new Date(startDate);
        }
        if (endDate) {
            query.date.$lte = new Date(endDate);
        }
    }
    if (activity) {
        query.activity = activity;
    }

    try {
        const logs = await WorkoutLog.find(query);

        // Calculate statistics
        const totalCaloriesBurned = logs.reduce((total, log) => total + log.caloriesBurned, 0);
        const totalDuration = logs.reduce((total, log) => total + log.duration, 0);
        const workoutTypes = logs.map(log => log.activity);
        const activityCount = workoutTypes.reduce((acc, type) => {
            acc[type] = (acc[type] || 0) + 1;
            return acc;
        }, {});

        res.json({
            totalCaloriesBurned,
            totalDuration,
            activityCount,
            totalWorkouts: logs.length,
            workouts: logs
        });
    } catch (error) {
        res.status(400).send('Error fetching workout statistics: ' + error.message);
    }
};

module.exports = getWorkoutStatistics;
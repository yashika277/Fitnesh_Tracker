const WorkoutLog = require('../models/workoutlog.model');

// Create a workout log
const createWorkoutLog = async (req, res) => {
    const { activity, duration, caloriesBurned } = req.body;
    const newLog = new WorkoutLog({ user: req.user.id, activity, duration, caloriesBurned });

    try {
        await newLog.save();
        res.status(201).json(newLog);
    } catch (error) {
        res.status(400).send('Error creating workout log: ' + error.message);
    }
};

// Get all workout logs for a user
const getWorkoutLogs = async (req, res) => {
    try {
        const logs = await WorkoutLog.find({ user: req.user.id });
        res.json(logs);
    } catch (error) {
        res.status(400).send('Error fetching workout logs: ' + error.message);
    }
};

// Update a workout log
const updateWorkoutLog = async (req, res) => {
    const { id } = req.params;
    const { activity, duration, caloriesBurned } = req.body;

    try {
        const updatedLog = await WorkoutLog.findByIdAndUpdate(
            id,
            { activity, duration, caloriesBurned },
            { new: true }
        );
        res.json(updatedLog);
    } catch (error) {
        res.status(400).send('Error updating workout log: ' + error.message);
    }
};

// Delete a workout log
const deleteWorkoutLog = async (req, res) => {
    const { id } = req.params;

    try {
        await WorkoutLog.findByIdAndDelete(id);
        res.json({ message: 'Workout log deleted successfully.' });
    } catch (error) {
        res.status(400).send('Error deleting workout log: ' + error.message);
    }
};

module.exports = { createWorkoutLog, getWorkoutLogs, updateWorkoutLog, deleteWorkoutLog }
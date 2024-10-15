const User = require('../models/user.model');
const WorkoutLog = require('../models/workoutlog.model');
const FitnessProgram = require('../models/fitnessprogram.model');

// Get aggregate statistics for all users
const getAggregateStatistics = async (req, res) => {
    try {
        const totalUsers = await User.countDocuments();
        const totalWorkouts = await WorkoutLog.countDocuments();
        const totalCaloriesBurned = await WorkoutLog.aggregate([
            { $group: { _id: null, total: { $sum: "$caloriesBurned" } } }
        ]);

        res.json({
            totalUsers,
            totalWorkouts,
            totalCaloriesBurned: totalCaloriesBurned[0]?.total || 0
        });
    } catch (error) {
        res.status(400).send('Error fetching aggregate statistics: ' + error.message);
    }
};

// Manage users (Get all users)
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(400).send('Error fetching users: ' + error.message);
    }
};

// Create a fitness program
const createFitnessProgram = async (req, res) => {
    const { title, description, duration, level } = req.body;
    const newProgram = new FitnessProgram({ title, description, duration, level, user: req.user.id });

    try {
        await newProgram.save();
        res.status(201).json(newProgram);
    } catch (error) {
        res.status(400).send('Error creating fitness program: ' + error.message);
    }
};

// Get all fitness programs
const getFitnessPrograms = async (req, res) => {
    try {
        const programs = await FitnessProgram.find();
        res.json(programs);
    } catch (error) {
        res.status(400).send('Error fetching fitness programs: ' + error.message);
    }
};

// Update a fitness program
const updateFitnessProgram = async (req, res) => {
    const { id } = req.params;
    const { title, description, duration, level } = req.body;

    try {
        const updatedProgram = await FitnessProgram.findByIdAndUpdate(
            id,
            { title, description, duration, level },
            { new: true }
        );
        res.json(updatedProgram);
    } catch (error) {
        res.status(400).send('Error updating fitness program: ' + error.message);
    }
};

// Delete a fitness program
const deleteFitnessProgram = async (req, res) => {
    const { id } = req.params;

    try {
        await FitnessProgram.findByIdAndDelete(id);
        res.json({ message: 'Fitness program deleted successfully.' });
    } catch (error) {
        res.status(400).send('Error deleting fitness program: ' + error.message);
    }
};
module.exports = { getAggregateStatistics, getAllUsers, createFitnessProgram, getFitnessPrograms, updateFitnessProgram, deleteFitnessProgram }
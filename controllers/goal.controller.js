const Goal = require('../models/goal.model');

// Create a goal
const createGoal = async (req, res) => {
    const { target, targetValue, frequency, endDate } = req.body;
    const newGoal = new Goal({ user: req.user.id, target, targetValue, frequency, endDate });

    try {
        await newGoal.save();
        res.status(201).json(newGoal);
    } catch (error) {
        res.status(400).send('Error creating goal: ' + error.message);
    }
};

// Get all goals for a user
const getGoals = async (req, res) => {
    try {
        const goals = await Goal.find({ user: req.user.id });
        res.json(goals);
    } catch (error) {
        res.status(400).send('Error fetching goals: ' + error.message);
    }
};

// Update a goal
const updateGoal = async (req, res) => {
    const { id } = req.params;
    const { targetValue, currentValue } = req.body;

    try {
        const updatedGoal = await Goal.findByIdAndUpdate(
            id,
            { targetValue, currentValue },
            { new: true }
        );
        res.json(updatedGoal);
    } catch (error) {
        res.status(400).send('Error updating goal: ' + error.message);
    }
};

// Delete a goal
const deleteGoal = async (req, res) => {
    const { id } = req.params;

    try {
        await Goal.findByIdAndDelete(id);
        res.json({ message: 'Goal deleted successfully.' });
    } catch (error) {
        res.status(400).send('Error deleting goal: ' + error.message);
    }
};

module.exports = { createGoal, getGoals, updateGoal, deleteGoal }
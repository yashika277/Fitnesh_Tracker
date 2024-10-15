const mongoose = require('mongoose');

const fitnessProgramSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    }, // Duration in weeks
    level: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced'],
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }, // Admin who created the program
});

const FitnessProgram = mongoose.model('FitnessProgram', fitnessProgramSchema);
module.exports = FitnessProgram;

const mongoose = require('mongoose');

const problem = mongoose.Schema({
    ProblemContent: {
        type: String,
        required: true
    },
    ProblemSolution: {
        type: String,
        required: true
    },
    ProblemType: {
        type: String,
        required: true
    },
    ProblemCategory: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
        default: null
    },
    CreatedAt: {
        type: Date,
        default: new Date()
    },
    UpdatedAt: {
        type: Date,
        default: null
    },
});

module.exports = Problem = mongoose.model('problem', problem);
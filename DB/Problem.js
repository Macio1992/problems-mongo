const mongoose = require('mongoose');

const problem = mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: null
    },
});

module.exports = Problem = mongoose.model('problem', problem);
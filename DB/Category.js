const mongoose = require('mongoose');

const category = mongoose.Schema({
    CategoryName: {
        type: String,
        required: true,
    },
    isRootCategory: {
        type: Boolean,
        default: true,
    },
    CategoryParentId: {
        type: String,
        default: null,
    },
    CreatedAt: {
        type: Date,
        default: new Date(),
    },
    UpdatedAt: {
        type: Date,
        default: null,
    },
});

module.exports = Category = mongoose.model('category', category);

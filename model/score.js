const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
    win: {
        type: Number,
    },
    loose: {
        type: Number,
    },
    tie: {
        type: Number,
    }
});

module.exports = mongoose.model('score', scoreSchema);
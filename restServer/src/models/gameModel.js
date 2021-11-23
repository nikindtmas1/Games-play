const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({

    title: String,
    category: String,
    maxLevel: String,
    imageUrl: String,
    summary: String,
});

module.exports = mongoose.model('Game', gameSchema);
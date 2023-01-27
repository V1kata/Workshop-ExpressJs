const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 50
    },
    imageUrl: {
        type: String,
        required: true,
        // http and https validation
    },
    difficultyLevel: {
        type: Number,
        required: true,
        mix: 1,
        max: 6
    }
    // Accesoried
});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;
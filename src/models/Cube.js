const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 60
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
    },
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accessory'
    }]
    // Accesoried
});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;
const mongoose = require('mongoose');
const validationPattern = /http[s]?:\/\/[\w./-]+/;

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 200
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
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

cubeSchema.path('imageUrl').validate(function(value) {
    return validationPattern.test(value);
}, 'Image url needs to start with http or https');

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;
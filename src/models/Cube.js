const mongoose = require('mongoose');
const httpValidationPattern = /http[s]?:\/\/[\w./-]+/;
const validationPattern = /[\w ,-.*]+/;

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [5, 'Name need to be atleast 5 symbols']
    },
    description: {
        type: String,
        required: true,
        minLength: 20
    },
    imageUrl: {
        type: String,
        required: true
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

cubeSchema.path('name').validate(function(value) {
    return validationPattern.test(value);
}, 'The name needs to be only English letters, digits, and whitespaces');

cubeSchema.path('description').validate(function(value) {
    return validationPattern.test(value);
}, 'Description needs to be only English letters, digits, and whitespaces');

cubeSchema.path('imageUrl').validate(function(value) {
    return httpValidationPattern.test(value);
}, 'Image url needs to start with http or https');

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;
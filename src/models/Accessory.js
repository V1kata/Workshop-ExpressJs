const mongoose = require('mongoose');
const httpValidationPattern = /http[s]?:\/\/[\w./-]+/;
const validationPattern = /[\w ,-.*]+/;

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLenght: 5
    },
    description: {
        type: String,
        required: true,
        minLength: 20
    },
    imageUrl: {
        type: String,
        required: true,
        // http and https validation
    },
    cubes: [{
        type: mongoose.Types.ObjectId,
        ref: 'Cube'
    }]
});

accessorySchema.path('name').validate(function(value) {
    return validationPattern.test(value);
}, 'The name needs to be only English letters, digits, and whitespaces');

accessorySchema.path('description').validate(function(value) {
    return validationPattern.test(value);
}, 'Description needs to be only English letters, digits, and whitespaces');

accessorySchema.path('imageUrl').validate(function(value) {
    return httpValidationPattern.test(value);
}, 'Image url needs to start with http or https');

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;
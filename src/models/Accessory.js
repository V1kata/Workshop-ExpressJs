const mongoose = require('mongoose');
const validationPattern = /http[s]?:\/\/[\w./-]+/;

const accessorySchema = new mongoose.Schema({
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
    }
});

accessorySchema.path('imageUrl').validate(function(value) {
    return validationPattern.test(value);
}, 'Image url needs to start with http or https');

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;
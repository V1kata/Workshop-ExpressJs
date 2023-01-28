const mongoose = require('mongoose');

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
    },
    cube: {
        type: mongoose.Types.ObjectId,
        ref: 'Cube'
    }
});

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;
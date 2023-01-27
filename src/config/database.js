const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/cubicle';

async function connection() {
    mongoose.set('strictQuery', false);

    await mongoose.connect(uri);
    console.log('Connected to database');
}

module.exports = connection;
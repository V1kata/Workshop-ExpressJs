const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

userSchema.method('validatePassword', function(password) {
    return bcrypt.compare(password, this.password);
})  

const User = mongoose.model('User', userSchema);

module.exports = User;
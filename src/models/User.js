const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validationPattern = /\w+/;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: [5, 'Username must be atleast 5 symbols']
    },
    password: {
        type: String,
        required: true,
        minLength: [8, 'Password must be atleast 8 symbols']
    }
});

userSchema.path('username').validate(function(value) {
    return validationPattern.test(value);
}, 'Name must be only English letters and digits');

userSchema.path('password').validate(function(value) {
    return validationPattern.test(value);
}, 'Name must be only English letters and digits');

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
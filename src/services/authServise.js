const config = require("../config/config");
const User = require("../models/User");
const jwt = require('../config/jwt');
const AppError = require('../utils/appError');

exports.getUser = (username) => User.findOne({ username });

exports.register = (username, password) => User.create({ username, password });

exports.login = async (username, password) => {
    const user = await this.getUser(username);

    if (!user) {
        throw new AppError('Invalid username', { user });
    }

    const isValid = await user.validatePassword(password);

    if (!isValid) {
        throw new AppError('Invalid password');
    }

    const payload = { _id: user._id, username };
    const secret = config.secret;
    const token = await jwt.promiseSign(payload, secret, { expiresIn: '2h' });

    return token;
}
const config = require("../config/config");
const User = require("../models/User");
const jwt = require('../config/jwt');

exports.getUser = (username) => User.findOne({ username });

exports.register = (username, password) => User.create({ username, password });

exports.login = async (username, password) => {
    const user = await this.getUser(username);

    const isValid = await user.validatePassword(password);

    if (!isValid || !user) {
        throw new Error('Invalid username or password');
    }

    const payload = { _id: user._id, username };
    const secret = config.secret;
    const token = await jwt.promiseSign(payload, secret, { expiresIn: '2h' });

    return token;
}
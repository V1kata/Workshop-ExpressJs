const User = require("./User");

exports.register = (username, password) => User.create({ username, password });
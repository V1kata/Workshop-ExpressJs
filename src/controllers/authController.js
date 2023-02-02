const User = require("../models/User");

exports.getRegister = (req, res) => {
    res.render('auth/registerPage');
}

exports.postRegister = async (req, res) => {
    const { username, password, repeatPassword } = req.body;

    if (password !== repeatPassword) {
        return res.redirect('/404');
    }

    const existingUser = await User.find({ username });

    if (existingUser) {
        res.redirect('/login');
    }

    // const user = 
}

exports.getLogin = (req, res) => {
    res.render('auth/loginPage');
}
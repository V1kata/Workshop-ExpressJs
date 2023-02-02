const User = require("../models/User");

const authServise = require('../services/authServise');

exports.getRegister = (req, res) => res.render('auth/registerPage');

exports.postRegister = async (req, res) => {
    const { username, password, repeatPassword } = req.body;

    if (password !== repeatPassword) {
        return res.redirect('/404');
    }

    const existingUser = await User.find({ username });

    if (existingUser) {
        res.redirect('/login');
    }

    await authServise.register(username, password);

    res.redirect('/login');
}

exports.getLogin = (req, res) => res.render('auth/loginPage');

exports.postLogin = async (req, res) => {
    const { username, password } = req.body;

    try {
        const token = await authServise.login(username, password);

        res.cookie('auth', token, { httpOnly: true });
        res.redirect('/');
    } catch (err) {
        console.log(err.message);
        res.redirect('/404');
    }
}

exports.getLogout = (req, res) => { 
    res.clearCookie('auth'); res.redirect('/'); 
}
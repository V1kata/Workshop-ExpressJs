exports.getRegister = (req, res) => {
    res.render('auth/registerPage');
}

exports.getLogin = (req, res) => {
    res.render('auth/loginPage');
}
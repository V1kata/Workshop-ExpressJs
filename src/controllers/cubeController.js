const db = require('../db.json')

exports.getHome = (req, res) => {
    res.render('index', { cube: db });
}

exports.getCreateCube = (req, res) => {
    res.render('create');
}

exports.postCreateCube = (req, res) => {
    console.log(req.body);

    res.send('Form submitted')
}
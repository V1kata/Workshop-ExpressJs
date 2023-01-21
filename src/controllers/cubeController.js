const db = require('../db.json');
const Cube = require('../createClass');

exports.getHome = (req, res) => {
    res.render('index', { cube: db });
}

exports.getCreateCube = (req, res) => {
    res.render('create');
}

exports.postCreateCube = (req, res) => {
    const id = db.length + 1;
    let cube = new Cube(req.body);
    cube.save(id);

    // makeACube(req.body, id);


    res.redirect('/');
}

exports.getDetails = (req, res) => {
    const id = req.url.split('/')[2];
    const cube = db.find(el => el.id == id);

    res.render('details', cube);
}

exports.getNotFound = (req, res) => {
    res.render('404')
}
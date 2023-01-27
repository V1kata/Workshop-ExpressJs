const Cube = require('../models/Cube');

exports.getCreateCube = (req, res) => {
    res.render('create');
}

exports.postCreateCube = async (req, res) => {
    let cube = new Cube(req.body);
    cube.save();

    res.redirect('/');
}

exports.getDetails = (req, res) => {
    const id = req.url.split('/')[2];
    const cube = db.find(el => el.id == id);

    res.render('details', cube);
}
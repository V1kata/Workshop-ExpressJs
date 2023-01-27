const Cube = require('../models/Cube');

exports.getCreateCube = (req, res) => {
    res.render('create');
}

exports.postCreateCube = async (req, res) => {
    let cube = new Cube(req.body);
    cube.save();

    res.redirect('/');
}

exports.getDetails = async (req, res) => {
    const id = req.params.cubeId;
    const cube = await Cube.findById(id);

    res.render('details', cube);
}
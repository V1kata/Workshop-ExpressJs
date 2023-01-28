const Accessory = require('../models/Accessory');
const Cube = require('../models/Cube');

exports.getCreateCube = (req, res) => {
    res.render('create');
}

exports.postCreateCube = async (req, res) => {

    try {
        let cube = new Cube(req.body);
        cube.save();
    } catch (err) {
        console.log(err.message);
        res.redirect('/404');
        return;
    }

    res.redirect('/');
}

exports.getDetails = async (req, res) => {
    const id = req.params.cubeId;
    const cube = await Cube.findById(id).populate('accessories').lean();
    console.log(cube)

    res.render('details', { cube });
}
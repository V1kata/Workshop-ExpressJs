const Accessory = require('../models/Accessory');
const Cube = require('../models/Cube');

exports.getAccessoryCreate = (req, res) => {
    res.render('createAccessory');
}

exports.postAccessory = async (req, res) => {
    try {
        await Accessory.create(req.body);
    } catch (err) {
        console.log(err.message);
        res.redirect('/404');
        return;
    }

    res.redirect('/');
}

exports.getAttachAccessory = async (req, res) => {
    const id = req.params.id;
    const cube = await Cube.findById(id);

    res.render('attachAccessory', cube);
}
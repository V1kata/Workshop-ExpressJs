const Accessory = require('../models/Accessory');
const Cube = require('../models/Cube');

exports.getAccessoryCreate = (req, res) => {
    res.render('accessories/createAccessory');
}

exports.postAccessory = async (req, res) => {
    try {
        await Accessory.create(req.body);
    } catch (err) {
        console.log(err.message);
        res.locals.errors = err.message;
        return;
    }

    res.redirect('/');
}

exports.getAttachAccessory = async (req, res) => {
    const id = req.params.id;
    const cube = await Cube.findById(id).lean();
    const accessories = await Accessory.find({ cubes: [] }).lean();

    res.render('accessories/attachAccessory', { cube, accessories });
}

exports.postAttachAccessory = async (req, res) => {
    const cubeId = req.params.id
    const accessoryId = req.body.accessory;

    const accessory = await Accessory.findById(accessoryId);
    accessory.cubes.push(cubeId);

    const cube = await Cube.findById(cubeId);
    cube.accessories.push(accessoryId);

    try {
        await cube.save();
        await accessory.save();
    } catch(err) {
        res.locals.errors = err.message;
        return
    }


    res.redirect(`/details/${cubeId}`);
}
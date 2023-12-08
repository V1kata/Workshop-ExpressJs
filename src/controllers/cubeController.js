const Cube = require('../models/Cube');
const { updateById, findById, deleteById } = require('../services/cubeServise');

exports.getCreateCube = (req, res) => {
    res.render('cubes/create');
}

exports.postCreateCube = async (req, res) => {

    try {
        req.body['owner'] = req.user;
        let cube = new Cube(req.body);
        cube.save();
    } catch (err) {
        res.locals.errors = err.message;
        res.redirect('/404');
        return;
    }

    res.redirect('/');
}

exports.getDetails = async (req, res) => {
    const id = req.params.cubeId;
    const cube = await findById(id).populate('accessories').lean();
    const isOwner = cube.owner == req?.user?._id;

    res.render('cubes/details', { cube, isOwner });
}

exports.getEdit = async (req, res) => {
    const cube = await findById(req.params.cubeId);
    res.render('cubes/editCubePage', cube);
}

exports.postEdit = async (req, res) => {
    const data = req.body;
    const id = req.params.cubeId;

    try {
        const cube = await updateById(id, data);
        console.log(cube);
    } catch(err) {
        throw new Error('Can not update at the moment');
        return;
    }

    res.redirect(`/details/${id}`);
}

exports.getDelete = async (req, res) => {
    const cube = await findById(req.params.cubeId);
    res.render('cubes/deleteCubePage', cube);
}

exports.postDelete = async (req, res) => {
    try {
        await deleteById(req.params.cubeId);
    } catch(err) {
        res.locals.errors = err.message;
        return
    }
    
    res.redirect('/');
}
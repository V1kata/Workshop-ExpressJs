const Cube = require('../models/Cube');

exports.getHome = async (req, res) => {
    const cube = await Cube.find().lean();
    res.render('home/index', { cube });
};

exports.postHome = async (req, res) => {
    const { search, from, to } = req.body; 
    let foundCubes = await Cube.find().lean();

    if (search) {
        foundCubes = foundCubes.filter(el => el.name.toLowerCase().includes(search.toLowerCase()));
    }
    
    if (from) {
        foundCubes = foundCubes.filter(el => Number(from) <= Number(el.difficultyLevel));
    }

    if (to) {
        foundCubes = foundCubes.filter(el => Number(to) >= Number(el.difficultyLevel));
    }
    
    if (!foundCubes.length) {
        return res.redirect('/');
    }
    
    res.render('home/index', { cube: foundCubes });
};

exports.getAbout = (req, res) => {
    res.render('home/about');
};

exports.getNotFound = (req, res) => {
    res.render('home/404');
};
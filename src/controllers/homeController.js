const db = require('../db.json');

exports.getHome = (req, res) => {
    res.render('index', { cube: db });
};

exports.postHome = (req, res) => {
    const { search, from, to } = req.body; 
    let foundCubes = db.slice();
    
    if (search) {
        foundCubes = foundCubes.filter(el => el.name.toLowerCase().includes(search.toLowerCase()));
    }
    
    if (from) {
        foundCubes = foundCubes.filter(el => Number(from) <= Number(el.diffLevel));
    }

    if (to) {
        foundCubes = foundCubes.filter(el => Number(to) >= Number(el.diffLevel));
    }
    
    if (foundCubes.length == 0) {
        res.render('index', { cube: db });
        return;
    }
    
    res.render('index', { cube: foundCubes });
};

exports.getAbout = (req, res) => {
    res.render('about');
};

exports.getNotFound = (req, res) => {
    res.render('404');
};
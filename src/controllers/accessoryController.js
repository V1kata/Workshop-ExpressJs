const Accessory = require('../models/Accessory');

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
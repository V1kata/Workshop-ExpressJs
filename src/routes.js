const cubeController = require('./controllers/cubeController');
const router = require('express').Router(); // var 1

// const express = require('express');
// const Router = express.Router;

// const router = Router();
// var 2

router.get('/', cubeController.getHome);

router.get('/about', (req, res) => {
    res.render('about');
});

router.route('/create')
    .get(cubeController.getCreateCube)
    .post(cubeController.postCreateCube)

router.get('/details/:id', cubeController.getDetails);

router.get('*', cubeController.getNotFound);

module.exports = router;
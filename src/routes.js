const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');
const router = require('express').Router(); // var 1

// const express = require('express');
// const Router = express.Router;

// const router = Router();
// var 2

router.route('/')
    .get(homeController.getHome)
    .post(homeController.postHome);

router.get('/about', homeController.getAbout);

router.route('/create')
    .get(cubeController.getCreateCube)
    .post(cubeController.postCreateCube)

router.get('/details/:id', cubeController.getDetails);

router.get('*', homeController.getNotFound);

module.exports = router;
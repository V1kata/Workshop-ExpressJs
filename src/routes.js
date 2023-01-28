const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');
const accessoryController = require('./controllers/accessoryController');
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

router.get('/details/:cubeId', cubeController.getDetails);

router.route('/create/accessory')
    .get(accessoryController.getAccessoryCreate)
    .post(accessoryController.postAccessory);

router.get('/attach/accessory/:id', accessoryController.getAttachAccessory);

router.get('/404', homeController.getNotFound);

router.get('*', homeController.getNotFound);

module.exports = router;
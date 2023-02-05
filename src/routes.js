const router = require('express').Router(); // var 1

const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');
const accessoryController = require('./controllers/accessoryController');
const authController = require('./controllers/authController');
const { authentication, isAuthenticated } = require('./config/authMiddleware');
// const express = require('express');
// const Router = express.Router;

// const router = Router();
// var 2

router.route('/')
    .get(homeController.getHome)
    .post(homeController.postHome);

router.get('/about', homeController.getAbout);

router.route('/create')
    .get(isAuthenticated, cubeController.getCreateCube)
    .post(cubeController.postCreateCube)

router.get('/details/:cubeId', cubeController.getDetails);

router.route('/edit/:cubeId')
    .get(cubeController.getEdit)
    .post(cubeController.postEdit);

router.route('/delete/:cubeId')
    .get(cubeController.getDelete)
    .post(cubeController.postDelete);

router.route('/create/accessory')
    .get(isAuthenticated, accessoryController.getAccessoryCreate)
    .post(accessoryController.postAccessory);

router.route('/attach/accessory/:id')
    .get(accessoryController.getAttachAccessory)
    .post(accessoryController.postAttachAccessory)

router.get('/404', homeController.getNotFound);

router.route('/register')
    .get(authController.getRegister)
    .post(authController.postRegister);

router.route('/login')
    .get(authController.getLogin)
    .post(authController.postLogin);

router.get('/logout', authController.getLogout);

router.get('*', homeController.getNotFound);

module.exports = router;
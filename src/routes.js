const router = require('express').Router(); // var 1

const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');
const accessoryController = require('./controllers/accessoryController');
const authController = require('./controllers/authController');
const { authentication, isAuthenticated } = require('./middlewares/authMiddleware');
const { handleRequest } = require('./utils/requestUtils');handleRequest(
// const express = require('express'));
// const Router = express.Router;

// const router = Router();
// var 2

router.route('/')
    .get(homeController.getHome)
    .post(homeController.postHome));

router.get('/about', homeController.getAbout);

router.route('/create')
    .get(isAuthenticated, handleRequest(cubeController.getCreateCube))
    .post(handleRequest(cubeController.postCreateCube));

router.get('/details/:cubeId', handleRequest(cubeController.getDetails));

router.route('/edit/:cubeId')
    .get(handleRequest(cubeController.getEdit))
    .post(handleRequest(cubeController.postEdit));

router.route('/delete/:cubeId')
    .get(handleRequest(cubeController.getDelete))
    .post(handleRequest(cubeController.postDelete));

router.route('/create/accessory')
    .get(isAuthenticated, accessoryController.getAccessoryCreate)
    .post(accessoryController.postAccessory);

router.route('/attach/accessory/:id')
    .get(handleRequest(accessoryController.getAttachAccessory))
    .post(handleRequest(accessoryController.postAttachAccessory))

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
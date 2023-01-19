const cubeController = require('./controllers/cubeController');
const router = require('express').Router(); // var 1

// const express = require('express');
// const Router = express.Router;

// const router = Router();
// var 2

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/create', cubeController.getCreateCube);

module.exports = router;
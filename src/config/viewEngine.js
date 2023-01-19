const hbs = require('express-handlebars');

function setupViewEngine(app) {
    app.engine('hbs', hbs.engine({ 
        extname: 'hbs' 
    })); // extname - extension name
    app.set('view engine', 'hbs');
    app.set('views', './src/views'); // where to look for views
}

module.exports = setupViewEngine;
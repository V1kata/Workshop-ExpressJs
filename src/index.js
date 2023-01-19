const express = require('express');

const setupViewEngine = require('./config/viewEngine')
const config = require('./config/config');

const app = express();
setupViewEngine(app);
// require('./config/viewEngine')(app); // 1 line setup

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/css/cite.css')

app.listen(config.port, () => console.log(`Server is running on port ${config.port}...`));
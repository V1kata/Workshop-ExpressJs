const express = require('express');
const router = require('./routes');

const setupViewEngine = require('./config/viewEngine');
const config = require('./config/config');
const initDatabase = require('./config/database');

const app = express();
setupViewEngine(app);
// require('./config/viewEngine')(app); // 1 line setup

app.use(express.static('./src/public'));
app.use(express.urlencoded({ extended: false }));
app.use(router);

initDatabase()
    .then(() => app.listen(config.port, () => console.log(`Server is running on port ${config.port}...`)))
    .catch((error) => console.log(error));
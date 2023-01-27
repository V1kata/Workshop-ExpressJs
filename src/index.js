const express = require('express');
const router = require('./routes');

const setupViewEngine = require('./config/viewEngine');
const config = require('./config/config');

const app = express();
setupViewEngine(app);
// require('./config/viewEngine')(app); // 1 line setup

app.use(express.static('./src/public'));
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(config.port, () => console.log(`Server is running on port ${config.port}...`));
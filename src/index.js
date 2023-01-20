const express = require('express');
const router = require('./routes');

const setupViewEngine = require('./config/viewEngine');
const config = require('./config/config');

const app = express();
setupViewEngine(app);

app.use(express.static('./src/public'));
app.use(express.urlencoded({ extended: false }));
app.use(router);
// require('./config/viewEngine')(app); // 1 line setup

app.listen(config.port, () => console.log(`Server is running on port ${config.port}...`));
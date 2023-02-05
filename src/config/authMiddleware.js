const config = require("./config");
const promiseSign = require("./jwt");

exports.isAuthenticated = (req, res, next) => {
    if (!req.isAuth) {
        return res.redirect('/login');
    }

    next();
}

exports.authentication = async (req, res, next) => {
    const token = req.cookies['auth'];

    if (token) {
        try {
            const decodedToken = await promiseSign.promiseVerify(token, config.secret);

            req.user = decodedToken;
            req.isAuth = true;
        } catch(err) {
            console.log(err.message);
            res.redirect('/404');
        }
    } else {
        req.isAuth = false;
    }

    next()
}
const config = require("../config/config");
const promiseSign = require("../config/jwt");

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

            res.locals.isAuth = true;
        } catch(err) {
            res.locals.errors = err.message;
            res.clearCookie('auth');
            res.redirect('/404');
        }
    } else {
        req.isAuth = false;
        res.locals.isAuth = false;
    }

    next()
}
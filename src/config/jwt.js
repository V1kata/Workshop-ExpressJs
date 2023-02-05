const jwtCallback = require('jsonwebtoken');
const config = require('./config');

function promiseSign(payload, secret, options) {
    const promise = new Promise(function(resolve, reject) {
        jwtCallback.sign(payload, secret, options, (err, token) => {
            if (err) {
                return reject(err);
            }

            resolve(token);
        })
    });

    return promise;
}

function promiseVerify(token) {
    const promise = new Promise(function(resolve, reject) {
        jwtCallback.verify(token, config.secret, (err, token) => {
            if (err) {
                return reject(err);
            }

            resolve(token);
        })
    });

    return promise;
}

module.exports = {
    promiseSign,
    promiseVerify
};
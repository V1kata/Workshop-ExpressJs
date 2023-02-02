const jwtCallback = require('jsonwebtoken');

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

module.exports = promiseSign;
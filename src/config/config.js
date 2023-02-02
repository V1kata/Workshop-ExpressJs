const config = {
    production: {
        port: 3030,
        secret: 'SOMEPRODUCTIONSECRET'
    },
    development: {
        port: 5000,
        secret: 'SOMEDEVSECRET'
    }
}

module.exports = config[process.env.node_env || 'development'];
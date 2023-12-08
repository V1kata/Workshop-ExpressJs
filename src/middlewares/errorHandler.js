const errorHandler = (err, req, res, next) => {
    console.log(err);

    res.render('home/404', { error: err.message });
}

module.exports = errorHandler;
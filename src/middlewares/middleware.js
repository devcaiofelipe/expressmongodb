module.exports.middlewareGlobal = (req, res, next) => {
    console.log('Passei no middleware global!');
    next();
};

module.exports.outroMiddleware = (req, res, next) => {
    console.log('Passei no outro middleware!');
    next();
};


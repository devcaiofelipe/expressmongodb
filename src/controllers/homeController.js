exports.paginaInicial = (req, res, next) => {
    res.render('index');
    next();
};

exports.trataPost = (req, res, next) => {
    console.log(req.body);
    res.send('Hey sou sua nova rota de post!');
};
const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

function firstMiddleware(req, res, next) {
    req.session = { nome: 'Caio', sobrenome: 'Felipe'};
    console.log('Passei no primeiro middleware!');
    next();
};

function secondMiddleware(req, res, next) {
    console.log('Passei no segundo middleware!');
    next();
};

function lastMiddleware(req, res) {
    console.log('Passei no ultimo middleware!');
    console.log(`Olha que temos na req.session.nome: ${req.session.nome}`)
};

// Rotas da Home
route.get('/', firstMiddleware, secondMiddleware, homeController.paginaInicial, lastMiddleware);
route.post('/', homeController.trataPost);

// Rotas de contato
route.get('/contato', contatoController.paginaInicial);

module.exports = route;
const routeBase = require('../api/controllers/base');
const routeConta = require('../api/controllers/conta');
const routeInstituicao = require('../api/controllers/instituicao');

module.exports = [
    routeBase,
    routeConta,
    routeInstituicao
];
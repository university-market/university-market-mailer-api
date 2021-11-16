const service = require('../services/instituicao/conta-institucional-service');

const entryPoint = '/instituicao';

module.exports = (app) => {

    // Envio de email de criacao de conta institucional
    app.post(entryPoint + '/containstitucional', async (req, res) => {
        
        await service.sendEmailContaInstitucional(req.body);
        res.end();
    });
};
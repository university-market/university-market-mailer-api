const service = require('../services/conta/recuperacao-senha-service');

const entryPoint = '/conta';

module.exports = (app) => {

    // Recuperacao de senha
    app.post(entryPoint + '/recuperarsenha', async (req, res) => {
        
        await service.sendEmailRecuperacaoSenha(req.body);
        res.end();
    });
};
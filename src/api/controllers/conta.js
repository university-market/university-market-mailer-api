const service = require('../services/conta/recuperacao-senha-service');

module.exports = (app) => {

    // Rota inicial exemplo do app
    app.post('/conta/recuperarsenha', async (req, res) => {
        
        await service.sendEmailRecuperacaoSenha(req.body);
        res.end();
    });
};
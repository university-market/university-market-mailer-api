const service = require('../services/conta/recuperacao-senha-service');

module.exports = (app) => {

    // Rota inicial exemplo do app
    app.post('/conta/recuperarsenha', async (req, res) => {

        const data = {
            nome: req.body?.estudanteNome,
            email: req.body?.email,
            token: req.body?.token,
            expirationTime: req.body?.expirationTime
        };
        
        await service.sendEmailRecuperacaoSenha(data);
        res.end();
    });
};
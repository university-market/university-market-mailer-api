const service = require('../services/base/base-service');

module.exports = (app) => {

    // Rota inicial exemplo do app
    app.post('/base', async (req, res) => {

        const data = {
            nome: req.body?.nome,
            email: req.body?.email
        };
        
        await service.sendExampleEmail(data);
        res.end();
    });
};
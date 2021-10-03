class BaseService {

    async sendExampleEmail(data) {

        // Envio de email deve ser aqui
        console.log(data);
    }
};

module.exports = new BaseService();
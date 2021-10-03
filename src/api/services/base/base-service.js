const mail = require('../../../helpers/email-helper');
const template = require('../../../common/email-template');

class BaseService {

    async sendExampleEmail(data) {

        mail.config = {
            
            template: template.example,
            subject: 'Primeiro e-mail base'
        };
        mail.contact = data.email;

        // Envio de email deve ser aqui
        console.log(data);

        // mail.send(data);
    }
};

module.exports = new BaseService();
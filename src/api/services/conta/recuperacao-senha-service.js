const mail = require('../../../helpers/email-helper');
const template = require('../../../common/email-template');

class BaseService {

    async sendEmailRecuperacaoSenha(data) {

        mail.config = {
            
            template: template.example,
            subject: 'Recuperação de senha'
        };
        mail.contact = data.email;

        mail.send(data);
    }
};

module.exports = new BaseService();
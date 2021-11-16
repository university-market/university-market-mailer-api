const UniversityMarketBase = require('../../base/university-market-base');
const mail = require('../../../helpers/email-helper');
const template = require('../../../common/email-template');

class ContaInstitucionalService extends UniversityMarketBase {

    async sendEmailContaInstitucional(data) {

        mail.config = {
            
            template: template.recuperacaoSenha,
            subject: 'Sua Conta Institucional'
        };
        mail.contact = data.email;

        const templateData = {
            razaoSocial: data?.razaoSocial,
            baseUrl: this.getApplicationUrl(),
        };

        mail.send(templateData);
    }

};

module.exports = new ContaInstitucionalService();
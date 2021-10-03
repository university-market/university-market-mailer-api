const mail = require('../../../helpers/email-helper');
const template = require('../../../common/email-template');

class BaseService {

    async sendExampleEmail(data) {

        mail.config = {
            
            template: template.example,
            subject: 'Um e-mail de boas vindas'
        };
        mail.contact = data.email;

        const today = new Date();
        const cumprimento = this.setCumprimentos(today.getHours());

        data = {
            ...data,
            cumprimento,
            currentYear: today.getFullYear().toString()
        };

        mail.send(data);
    }

    setCumprimentos(dayHour) {

        let cumprimento = 'beleza?';

        if (dayHour >= 0 && dayHour < 6)
            cumprimento = 'boa madruga';

        if (dayHour >= 6 && dayHour < 12)
            cumprimento = 'bom dia';

        if (dayHour >= 12 && dayHour < 18)
            cumprimento = 'boa tarde';

        if (dayHour >= 18)
            cumprimento = 'boa noite';

        return cumprimento;
    }
};

module.exports = new BaseService();
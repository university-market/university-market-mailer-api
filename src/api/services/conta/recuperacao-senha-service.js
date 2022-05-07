const UniversityMarketBase = require('../../base/university-market-base');
const mail = require('../../../helpers/email-helper');
const template = require('../../../common/email-template');

class RecuperacaoSenhaService extends UniversityMarketBase {

    async sendEmailRecuperacaoSenha(payload) {

        mail.contact = payload.email;
        mail.config = {
            template: template.recuperacaoSenha,
            subject: 'Recuperação de senha'
        };

        const labelTempoExpiracao = payload?.expirationTime == 1 ? 'minuto' : 'minutos';
        const strTempoExpiracao = this.criarDataFormatada(payload?.requestDate);

        const templateData = {
            nome: payload?.estudanteNome,
            token: payload?.token,
            tempoExpiracao: `${payload?.expirationTime} ${labelTempoExpiracao}`,
            baseUrl: this.getApplicationUrl(),
            dataHoraSolicitacao: strTempoExpiracao
        };

        await mail.send(templateData);
    }

    criarDataFormatada(unformatedDate) {

        const datetime = new Date(unformatedDate);

        const dateSeparator = '/';
        const timeSeparator = ':';

        const datePart = [datetime.getDate(), datetime.getMonth()+1]
            .map(this.formatPadLeft);
        const timePart = [datetime.getHours(), datetime.getMinutes()]
            .map(this.formatPadLeft);

        // Adicionar ano (único campo não formatado com zero a esquerda)
        datePart.push(datetime.getFullYear());

        return datePart.join(dateSeparator) + ' ' + timePart.join(timeSeparator);
    }

    formatPadLeft(e) {
        return '0'.concat(e).slice(-2);
    }
};

module.exports = new RecuperacaoSenhaService();
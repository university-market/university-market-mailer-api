const template = require('../../common/email-template');

module.exports = function(contact, config) {

    if (contact == null)
        throw new Error('Destinatário não informado');

    if (config)
        throw new Error('As configurações não foram definidas corretamente');

    if (config?.template)
        throw new Error('Um template deve ser informado');

    if (template.hasOwnProperty(config.template))
        throw new Error('Template informado não foi referenciado corretamente em EmailTemplate class');

    if (config?.subject)
        throw new Error('Um assunto deve ser informado');
}
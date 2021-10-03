const template = require('../../common/email-template');
const reader = require('./template-reader-helper');

module.exports = function(contact, config, templatesDirectory) {

    if (contact == null)
        throw new Error('Destinatário não informado');

    if (config == null)
        throw new Error('As configurações não foram definidas corretamente');

    if (config.template == null)
        throw new Error('Um template deve ser informado');

    // if (!template.hasOwnProperty(config.template))
    //     throw new Error('Template informado não foi referenciado corretamente em EmailTemplate class');

    if (config.subject == null)
        throw new Error('Um assunto deve ser informado');

    if (!reader.templateDirectoryExists(templatesDirectory)) {
        console.log('Diretório de templates informado: ', templatesDirectory);
        throw new Error('Diretório de template definido não existe');
    }

    if (!reader.templateDirectoryExists(`${templatesDirectory}/${config.template.folder}/${config.template.template}`)) {
        console.log('Template informado: ', `${config.template.folder}/${config.template.template}`);
        throw new Error('Template informado não existe');
    }

}
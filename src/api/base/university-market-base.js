const environment = require('../../config/environment');

module.exports = class UniversityMarketBase {

    

    // Environment operations

    /**
     * Obtém o ambiente de execução da aplicação de acordo com a configuração local
     * @returns {string} Ambiente de execução
     */
    getEnvironment = () => environment.environment;
    
    /**
     * Obtém a URL da aplicação de acordo com a configuração local
     * @returns {string} URL base da aplicação
     */
    getApplicationUrl = () => environment.applicationUrl;
}
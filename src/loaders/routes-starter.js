const routes = require('../routes/routes');

module.exports = {

    startRoutesInstance(app) {

        routes.forEach(route => route(app) ?? null);
    }
};
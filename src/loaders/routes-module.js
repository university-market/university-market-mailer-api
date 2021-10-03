const starter = require('./routes-starter');

module.exports = {

    run(app) {
        return starter.startRoutesInstance(app);
    }
};
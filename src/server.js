const app = require('./app');
const env = require('./config/environment');
const routes = require('./loader/routes-module');

// Active application routes
// routes.run(app);

// Start application listenner
app.listen(env.port, () => console.info('Application is listening on 3000 port'));
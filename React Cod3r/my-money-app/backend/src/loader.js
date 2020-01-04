const server = require('./config/server')
require('./config/databese')
require('./config/routes')(server)
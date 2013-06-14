var parseEnv = require('parse-env');

var configTemplate = require('./config.template');
var config = require('./config');


module.exports = parseEnv(process.env, configTemplate, config);

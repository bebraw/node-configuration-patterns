var configTemplate = require('./config.template');
var config = require('./config');


module.exports = init();

function init() {
    return parseEnv(process.env, configTemplate, config);
}

function parseEnv(env, template, config, parent, prefix) {
    var k, v, envVar;

    if(!parent) parent = {};

    for(k in template) {
        v = template[k];

        envVar = prefix? prefix + '_': '';
        envVar += toEnvVar(k);

        if(isObject(v)) {
            parent[k] = {};
            parseEnv(env, v, v, parent[k], envVar);
        }
        else {
            // note that there is no check for missing configuration
            parent[k] = envVar in env? env[envVar]: config[k];
        }
    }

    return parent;
}

function toEnvVar(str) {
    // fooBar -> FOO_BAR
    var ret = '';

    str.split(/([A-Z])/).forEach(function(v) {
        ret += v == v.toLowerCase()? v.toUpperCase() + '_': v;
    });

    return ret.split('').slice(0, -1).join('');
}

function isObject(a) {
    return (!!a) && (a.constructor === Object);
}

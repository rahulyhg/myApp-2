var elasticsearch = require('elasticsearch');
var conf = require('../config/appConfig');
var client = new elasticsearch.Client({
  host: conf.es.logsTrace.host
});

module.exports = client;
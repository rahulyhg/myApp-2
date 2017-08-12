"use strict";

var client = require('../../conn/elasticSearch');
var conf = require('../../config/appConfig');
var serverLogger = {};
var debug = require("debug")("serverLogger");


serverLogger.read = function(body, callb){

	var query = {
	  index: conf.es.logsTrace.index,
	  type: conf.es.logsTrace.type,
	  body: body || {}
	};

	debug(query);

	client.search(query).then(function (resp) {

	    if(resp && resp.hits && resp.hits.hits[0] && resp.hits.hits[0]._source){

	    	return callb(null, resp.hits.hits[0]._source);
	    }else{

	    	return callb(resp);
	    }
	}, function (err) {

	    return callb(err);
	});

};

serverLogger.write = function(body, id, callb){

	var query = {
	  index: conf.es.logsTrace.index,
	  type: conf.es.logsTrace.type,
	  id: id,
	  body: body || {}
	};

	//debug(query);

	client.create(query).then(function (resp) {

		debug(resp);

	    if(resp && resp.created){

	    	return callb(null, resp.created);
	    }else{

	    	return callb(resp);
	    }
	}, function (err) {
		debug(err);
	});

};

module.exports = serverLogger;

(function(){
	if(require.main === module){
		// var body = {
		//   	"logId": "ghfhssdsdfsjb67hberf78f",
		//     "componentName": "login",
		//     "level": "error",
		//     "jsonData": {"error": "no data input"},
		//     "createAt": new Date()
		//  };

		// serverLogger.read({}, function(err, data){
		// 	console.log(err, data);
		// });

		// serverLogger.write(body, body.logId , function(err, data){
		// 	console.log(err, data);
		// });

	}
}());


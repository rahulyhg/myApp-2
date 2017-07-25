"use strict";

var conf = require('../config/appConfig');
var serverLog = require('../controller/common/serverLogs');
var debug = require("debug")("logger");

var loggerObj = new Object();
var isConsole = conf.settings.isConsole;
var isElasticLogger = conf.settings.isElasticLogger;

loggerObj.info = function (componentName, trackingId, msgJson) {
	if(isConsole){
		this.consoleLogger(componentName, trackingId, msgJson, "INFO");
	}

	if(isElasticLogger){
		this.serverLogger(componentName, trackingId, msgJson, "INFO");
	}
};

loggerObj.error = function (componentName, trackingId, msgJson) {
	if(isConsole){
		this.consoleLogger(componentName, trackingId, msgJson, "ERROR");
	}

	if(isElasticLogger){
		this.serverLogger(componentName, trackingId, msgJson, "ERROR");
	}
};

loggerObj.warn = function (componentName, trackingId, msgJson) {
	if(isConsole){
		this.consoleLogger(componentName, trackingId, msgJson, "WARN");
	}

	if(isElasticLogger){
		this.serverLogger(componentName, trackingId, msgJson, "WARN");
	}
};

loggerObj.consoleLogger = function (componentName, trackingId, msgJson, level) {
	console.log({componentName: componentName, trackingId: trackingId, msgJson: msgJson, level: level, msg: "consoled"});
};

loggerObj.serverLogger = function (componentName, trackingId, msgJson, level){

	debug({componentName: componentName, trackingId: trackingId, msgJson: msgJson, level: level});

	var body = {
		  	logId: trackingId,
		    componentName: componentName,
		    level: level,
		    jsonData: msgJson,
		    createAt: new Date()
		 };
	serverLog.write(body, body.logId, function(err, result){
		
		if(result){
			console.log({componentName: componentName, trackingId: trackingId, msgJson: msgJson, level: level, msg: "successfully inserted to logs"});
		}
		else{
			console.log({componentName: componentName, trackingId: trackingId, msgJson: msgJson, level: level, msg: "failed inserted to logs"});
		}
	});
};

module.exports = loggerObj;

(function(){
	if(require.main === module){
	  //loggerObj.info("test","asdscdsdfghjk",[{fun: "test"}]);
	}
}());
"use strict";

var loggerObj = new Object();
var isConsole = true;

loggerObj.info = function function_name(componentName, trackingId, msgJson) {
	if(isConsole){
		this.consoleLogger(componentName, trackingId, msgJson, "INFO");
	}
}

loggerObj.error = function function_name(componentName, trackingId, msgJson) {
	if(isConsole){
		this.consoleLogger(componentName, trackingId, msgJson, "ERROR");
	}
}

loggerObj.warn = function function_name(componentName, trackingId, msgJson) {
	if(isConsole){
		this.consoleLogger(componentName, trackingId, msgJson, "WARN");
	}
}

loggerObj.consoleLogger = function function_name(componentName, trackingId, msgJson, level) {
	console.log({componentName: componentName, trackingId: trackingId, msgJson: msgJson, level: level});
}

module.exports = loggerObj;

// (function(){
// 	loggerObj.info("test","asdfghjk",{funn: "test"});
// }());
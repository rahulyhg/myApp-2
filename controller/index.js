"use strict";

//globals
var Log = require("../appUtil/logger");
var statics = require("../appUtil/appStatic");
var countries = require("../model/countries");
var states = require("../model/states");
var cities = require("../model/cities");
var religion = require("../model/religion");
var castes = require("../model/castes");
var motherTongue = require("../model/motherTongue");

//constants
var indexObj = {};
var componentName = "controller.index";


indexObj.getCountry = function (params, callb) {
	var error = {};
	var logId = params.logId;
	var subComp = "getCountry";
	countries.find(function(err, respo){
		if(err){
			error.msg 		= statics.commonError.serverErr.displayMsg;
			error.status 	= statics.commonError.serverErr.status;
			error.code 		= statics.commonError.serverErr.code;
			error.logId 	= logId;
			error.err 		= err;

			Log.error(componentName + subComp, logId, err);
			return callb(error);
		}

		if(!respo || respo.length < 1){
			error.msg 		= statics.commonError.unAuthenticate.displayMsg;
			error.status 	= statics.commonError.unAuthenticate.status;
			error.code 		= statics.commonError.unAuthenticate.code;
			error.logId 	= logId;
			error.err 		= "no record found or wrong loginToken" + JSON.stringify(query);

			Log.error(componentName + subComp, logId, error);
			return callb(error);
		}

		Log.info(componentName + subComp, logId, respo);
		return callb(null, respo);

	});
}

indexObj.getStates= function (params, callb) {
	var subComp = "getStates";
	var error = {};
	var logId = params.logId;
	var countryId = params.countryId || "597858cdfe63857fbe7d09e4";
	var query = {
		countryId: countryId
	};
	states.find(query, function(err, respo){
		if(err){
			error.msg 		= statics.commonError.serverErr.displayMsg;
			error.status 	= statics.commonError.serverErr.status;
			error.code 		= statics.commonError.serverErr.code;
			error.logId 	= logId;
			error.err 		= err;

			Log.error(componentName + subComp, logId, err);
			return callb(error);
		}

		if(!respo || respo.length < 1){
			error.msg 		= statics.commonError.unAuthenticate.displayMsg;
			error.status 	= statics.commonError.unAuthenticate.status;
			error.code 		= statics.commonError.unAuthenticate.code;
			error.logId 	= logId;
			error.err 		= "no record found or wrong loginToken" + JSON.stringify(query);

			Log.error(componentName + subComp, logId, error);
			return callb(error);
		}

		Log.info(componentName + subComp, logId, respo);
		return callb(null, respo);

	});	
}

indexObj.getCities = function (params, callb) {
	var error = {};
	var subComp = "getCities";
	var logId = params.logId;
	cities.find(function(err, respo){
		if(err){
			error.msg 		= statics.commonError.serverErr.displayMsg;
			error.status 	= statics.commonError.serverErr.status;
			error.code 		= statics.commonError.serverErr.code;
			error.logId 	= logId;
			error.err 		= err;

			Log.error(componentName + subComp, logId, err);
			return callb(error);
		}

		if(!respo || respo.length < 1){
			error.msg 		= statics.commonError.unAuthenticate.displayMsg;
			error.status 	= statics.commonError.unAuthenticate.status;
			error.code 		= statics.commonError.unAuthenticate.code;
			error.logId 	= logId;
			error.err 		= "no record found or wrong loginToken" + JSON.stringify(query);

			Log.error(componentName + subComp, logId, error);
			return callb(error);
		}
		Log.info(componentName + subComp, logId, respo);
		return callb(null, respo);

	});	
}

indexObj.getReligions = function (params, callb) {
	var error = {};
	var subComp = "getReligions";
	var logId = params.logId;
	religion.find(function(err, respo){
		if(err){
			error.msg 		= statics.commonError.serverErr.displayMsg;
			error.status 	= statics.commonError.serverErr.status;
			error.code 		= statics.commonError.serverErr.code;
			error.logId 	= logId;
			error.err 		= err;

			Log.error(componentName + subComp, logId, err);
			return callb(error);
		}

		if(!respo || respo.length < 1){
			error.msg 		= statics.commonError.unAuthenticate.displayMsg;
			error.status 	= statics.commonError.unAuthenticate.status;
			error.code 		= statics.commonError.unAuthenticate.code;
			error.logId 	= logId;
			error.err 		= "no record found or wrong loginToken" + JSON.stringify(query);

			Log.error(componentName + subComp, logId, error);
			return callb(error);
		}
		Log.info(componentName + subComp, logId, respo);
		return callb(null, respo);

	});	
}

indexObj.getCastes = function (params, callb) {
	var error = {};
	var subComp = "getCastes";
	var logId = params.logId;
	castes.find(function(err, respo){
		if(err){
			error.msg 		= statics.commonError.serverErr.displayMsg;
			error.status 	= statics.commonError.serverErr.status;
			error.code 		= statics.commonError.serverErr.code;
			error.logId 	= logId;
			error.err 		= err;

			Log.error(componentName + subComp, logId, err);
			return callb(error);
		}

		if(!respo || respo.length < 1){
			error.msg 		= statics.commonError.unAuthenticate.displayMsg;
			error.status 	= statics.commonError.unAuthenticate.status;
			error.code 		= statics.commonError.unAuthenticate.code;
			error.logId 	= logId;
			error.err 		= "no record found or wrong loginToken" + JSON.stringify(query);

			Log.error(componentName + subComp, logId, error);
			return callb(error);
		}

		Log.info(componentName + subComp, logId, respo);

		return callb(null, respo);

	});	
}

indexObj.getMothertongues = function (params, callb) {
	var error = {};
	var logId = params.logId;
	var subComp = "getMothertongues";
	motherTongue.find(function(err, respo){
		if(err){
			error.msg 		= statics.commonError.serverErr.displayMsg;
			error.status 	= statics.commonError.serverErr.status;
			error.code 		= statics.commonError.serverErr.code;
			error.logId 	= logId;
			error.err 		= err;

			Log.error(componentName + subComp, logId, err);
			return callb(error);
		}

		if(!respo || respo.length < 1){
			error.msg 		= statics.commonError.unAuthenticate.displayMsg;
			error.status 	= statics.commonError.unAuthenticate.status;
			error.code 		= statics.commonError.unAuthenticate.code;
			error.logId 	= logId;
			error.err 		= "no record found or wrong loginToken" + JSON.stringify(query);

			Log.error(componentName + subComp, logId, error);
			return callb(error);
		}

		Log.info(componentName + subComp, logId, respo);
		return callb(null, respo);
	});	
}

module.exports = indexObj;

(function(){
	if(require.main == module){
		var params = {
			logId: "wsrdtfyghihd3"
		};
		indexObj.getCities(params, function(err, ress){
			console.log(err, ress);

		});
	}
}())
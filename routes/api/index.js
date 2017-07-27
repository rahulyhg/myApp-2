"use strict";

var indexCtrl = require("../../controller/index");
var LOG = require("../../appUtil/logger");
var statics = require('../../appUtil/appStatic');
var componentName = "indexApi";
var api = {};

//---------- GET ------------------------------

api.getCountry = function (req, res, next) {
	var params = {
		logId: req.body.logId || ""
	};

	if(req.body.logId){

		indexCtrl.getCountry(params, function(err, result){

			if(err){
				req.body.respoJson = err;
			}
			else{
				var jsonObj = statics.commonError.active;
				var jsondata = {
					status: jsonObj.status,
					code: jsonObj.code,
					displayMsg: jsonObj.displayMsg,
					data: result
				};

				req.body.respoJson = jsondata;
			}

			next();
		});

	}else{
		LOG.error(componentName + ".getCountry", req.body.logId, params);
		next();
	}
};

api.getStates = function (req, res, next) {
	var params = {
		logId: req.body.logId || ""
	};

	if(req.body.logId){

		indexCtrl.getStates(params, function(err, result){

			if(err){
				req.body.respoJson = err;
			}
			else{
				var jsonObj = statics.commonError.active;
				var jsondata = {
					status: jsonObj.status,
					code: jsonObj.code,
					displayMsg: jsonObj.displayMsg,
					data: result
				};

				req.body.respoJson = jsondata;
			}

			next();
		});

	}else{
		LOG.error(componentName + ".getStates", req.body.logId, params);
		next();
	}
};

api.getCities = function (req, res, next) {
	var params = {
		logId: req.body.logId || ""
	};

	if(req.body.logId){

		indexCtrl.getCities(params, function(err, result){

			if(err){
				req.body.respoJson = err;
			}
			else{
				var jsonObj = statics.commonError.active;
				var jsondata = {
					status: jsonObj.status,
					code: jsonObj.code,
					displayMsg: jsonObj.displayMsg,
					data: result
				};

				req.body.respoJson = jsondata;
			}

			next();
		});

	}else{
		LOG.error(componentName + ".getCities", req.body.logId, params);
		next();
	}
};

api.getReligions = function (req, res, next) {
	var params = {
		logId: req.body.logId || ""
	};

	if(req.body.logId){

		indexCtrl.getReligions(params, function(err, result){

			if(err){
				req.body.respoJson = err;
			}
			else{
				var jsonObj = statics.commonError.active;
				var jsondata = {
					status: jsonObj.status,
					code: jsonObj.code,
					displayMsg: jsonObj.displayMsg,
					data: result
				};

				req.body.respoJson = jsondata;
			}

			next();
		});

	}else{
		LOG.error(componentName + ".getReligions", req.body.logId, params);
		next();
	}
};

api.getCastes = function (req, res, next) {
	var params = {
		logId: req.body.logId || ""
	};

	if(req.body.logId){

		indexCtrl.getCastes(params, function(err, result){

			if(err){
				req.body.respoJson = err;
			}
			else{
				var jsonObj = statics.commonError.active;
				var jsondata = {
					status: jsonObj.status,
					code: jsonObj.code,
					displayMsg: jsonObj.displayMsg,
					data: result
				};

				req.body.respoJson = jsondata;
			}

			next();
		});

	}else{
		LOG.error(componentName + ".getCastes", req.body.logId, params);
		next();
	}
};

api.getMothertongues = function (req, res, next) {
	var params = {
		logId: req.body.logId || ""
	};

	if(req.body.logId){

		indexCtrl.getMothertongues(params, function(err, result){

			if(err){
				req.body.respoJson = err;
			}
			else{
				var jsonObj = statics.commonError.active;
				var jsondata = {
					status: jsonObj.status,
					code: jsonObj.code,
					displayMsg: jsonObj.displayMsg,
					data: result
				};

				req.body.respoJson = jsondata;
			}

			next();
		});

	}else{
		LOG.error(componentName + ".getMothertongues", req.body.logId, params);
		next();
	}
};

//---------- POST ------------------------------
//---------- PUT ------------------------------
//---------- DELETE ------------------------------


module.exports = api;
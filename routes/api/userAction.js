"use strict";

var userCtrl = require("../../controller/user/userControl");
var LOG = require("../../appUtil/logger");
var statics = require('../../appUtil/appStatic');
var componentName = "userAction";
var api = {};

api.search = function(req, res, next){
	var params = {
		logId: req.body.logId || ""
	};
	LOG.info(componentName + ".search", req.body.logId, params);

	if(req.body.loginToken && req.body.logId){

		userCtrl.search(params, function(err, result){

			if(err){
				LOG.error(componentName + ".search", req.body.logId, params);
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
				
				LOG.info(componentName + ".search", req.body.logId, params);
				req.body.respoJson = jsondata;
			}

			next();
		});

	}else{
		LOG.error(componentName + ".search", req.body.logId, params);
		next();
	}
};

api.sendInterest = function (req, res, next) {
	//userCtrl
};

api.acceptInterest = function (req, res, next) {
	//userCtrl
};

api.viewProfile = function (req, res, next) {
	//userCtrl
};


module.exports = api;
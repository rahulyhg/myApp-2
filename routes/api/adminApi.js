"use strict";

var userCtrl = require("../../controller/user/userControl");
var LOG = require("../../appUtil/logger");
var common = require("../../appUtil/commonUtil");
var statics = require('../../appUtil/appStatic');
var componentName = "userApi";
var api = {};

/**
 * [userLogin description]
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
api.userLogin = function (req, res, next) {
	var params = {
			username: req.body.username || "",
			pass: req.body.pass || "",
			logId: req.body.logId || ""
		};
	LOG.info(componentName + ".userLogin", req.body.logId, params);

	if(req.body.username && req.body.pass && req.body.logId){

		userCtrl.login(params, function(err, result){

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
		LOG.error(componentName + ".userLogin", req.body.logId, params);
		next();
	}
};

api.userRegister = function (req, res, next) {
	var params = {
			"name"          : req.body.name || "",
		    "username"      : req.body.username || "",
		    "pass"          : req.body.pass || "",
		    "gender"        : req.body.gender || "",
		    "dob"           : req.body.dob || "",
		    "mothertounge"  : req.body.mothertounge || "",
		    "mobile"        : req.body.mobile || "",
		    "country"       : req.body.country || "",
			logId: req.body.logId || ""
		};
	LOG.info(componentName + ".userRegister", req.body.logId, params);

	if(req.body.username && req.body.pass && req.body.logId){

		userCtrl.registration(params, function(err, result){

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
		LOG.error(componentName + ".userRegister", req.body.logId, params);
		next();
	}
};

api.userLogout = function(req, res, next){
	var params = {
		username: req.body.username || "",
		loginToken: req.body.loginToken || "",
		logId: req.body.logId || ""
	};
	LOG.info(componentName + ".userLogout", req.body.logId, params);

	if(req.body.username && req.body.loginToken && req.body.logId){

		userCtrl.logout(params, function(err, result){

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
		LOG.error(componentName + ".userLogout", req.body.logId, params);
		next();
	}
};

api.userProfile = function(req, res, next){
	var params = {
		profId: req.body.profId || "",
		logId: req.body.logId || ""
	};
	LOG.info(componentName + ".userProfile", req.body.logId, params);

	if(req.body.loginToken && req.body.logId){

		userCtrl.getProfile(params, function(err, result){

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
		LOG.error(componentName + ".userProfile", req.body.logId, params);
		next();
	}
};

module.exports = api;
"use strict";

var extend = require('util')._extend;

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

				const allData = {};

				allData.profileStatus = result[0].profileStatus;
				allData.basic = result[0].basic;
				allData.education = result[0].education;
				allData.family = result[0].family;
				allData.professional = result[0].professional;
				allData.horoscope = result[0].horoscope;
				allData.lifeStyle = result[0].lifeStyle;
				allData.contact = result[0].contact;
				allData.desiredPartner = result[0].desiredPartner;
				allData.parnicYoga = result[0].parnicYoga;
				allData.profileImage = result[0].profileImage;
				allData.visibleProfile = result[0].visibleProfile;
				allData.userid = result[0].userid;
				allData._id = result[0]._id;
				allData.age = calculateAge(result[0].basic.DOB);
				
				var jsondata = {
					status: jsonObj.status,
					code: jsonObj.code,
					displayMsg: jsonObj.displayMsg,
					data: [allData]
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

api.checkEmail = function(req, res, next){
	var params = {
			username: req.body.username || ""
		};
	LOG.info(componentName + ".userLogin", req.body.logId, params);

	if(req.body.username){

		userCtrl.checkEmail(params, function(err, result){

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
		LOG.error(componentName + ".checkEmail", req.body.logId, params);
		next();
	}
};

api.updateProfile = function(req, res, next){
	var params = req.body;

	if(req.body){

		userCtrl.updateProfile(params, function(err, result){

			if(err){

				LOG.error(componentName + ".updateProfile", req.body.logId, params);
				req.body.respoJson = err;
			}
			else{
				LOG.info(componentName + ".updateProfile", req.body.logId, params);
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
		LOG.error(componentName + ".updateProfile", req.body.logId, params);
		next();
	}
};

api.uploadPic = function(req, res, next){
};

api.uploadFile = function(req, res, next){
};

api.verifyEmail = function(req, res, next){
	var token = req.query.token;
	var logId = req.body.logId || ""

	common.verifyJwtToken(token, function(err, resp){
		
		if(err){
			LOG.error(componentName+ ".verifyEmail.verifyJwtToken", logId, err);
				req.body.respoJson = err;
			}
			else{
				LOG.info(componentName+ ".verifyEmail.verifyJwtToken", logId, resp);
				var jsonObj = statics.commonError.active;
				var jsondata = {
					status: jsonObj.status,
					code: jsonObj.code,
					displayMsg: jsonObj.displayMsg,
					data: resp.authToken
				};

				req.body.respoJson = jsondata;
			}

			next();
	});
};

function calculateAge(dob){
    var currentdate = new Date();
    var dateTime = new Date(dob.split('/')[2], dob.split('/')[1], dob.split('/')[0]);

    var timeDiff = Math.abs(currentdate.getTime() - dateTime.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return (diffDays / 365).toString().split(".")[0];
}


module.exports = api;
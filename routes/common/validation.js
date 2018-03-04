"use strict";

var userValidate = require("../../controller/user/userValidate");
var adminValidate = require("../../controller/admin/adminValidate");

var api = {};

api.userLoginValidate = function (req, res, next) {
	var body = req.body;
	userValidate.loginValidate(body, function(err, result){
		if(err){
			next(err);

		}else{
			next();
		}
	});
	
};

api.userLogoutValidate = function (req, res, next) {
	var body = req.body;
	userValidate.logoutValidate(body, function(err, result){
		if(err){
			next(err);

		}else{
			next();
		}
	});
	
};

api.userRegisterValidate = function (req, res, next) {
	var body = req.body;
	userValidate.registrationValidate(body, function(err, result){
		if(err){
			next(err);

		}else{
			next();
		}
	});

};

api.userProfileValidate = function (req, res, next) {
	var body = req.body;
	userValidate.profileValidate(body, function(err, result){
		if(err){
			next(err);

		}else{
			next();
		}
	});
};

// Admin request validations
api.adminRegisterValidate = function (req, res, next) {

	var body = req.body;
	adminValidate.registrationValidate(body, function(err, result){
		if (err) {
			next(err);
		} else {
			next();
		}
	});
}

api.adminLoginValidate = function (req, res, next) {
	var body = req.body;

	adminValidate.loginValidate(body, function(err, result){
		if (err) {
			next(err);
		} else {
			next();
		}
	});
}

api.adminLogoutValidate = function (req, res, next) {
	var body = req.body;
	adminValidate.logoutValidate(body, function(err, result){
		if (err) {
			next(err);
		} else {
			next();
		}
	});
}

module.exports = api;

"use strict";

var userValidate = require("../../controller/user/userValidate");

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


module.exports = api;
"use strict";

var userValidate = require("../../controller/user/userValidate");
var adminValidate = require("../../controller/admin/adminValidate");

var api = {};

api.userLoginValidate = function (req, res, next) {
		var body = req.body;
		userValidate.loginValidate(body, function (err, result) {
				if (err) {
						next(err);

				} else {
						next();
				}
		});

};

api.userLogoutValidate = function (req, res, next) {
		var body = req.body;
		userValidate.logoutValidate(body, function (err, result) {
				if (err) {
						next(err);

				} else {
						next();
				}
		});

};

api.userRegisterValidate = function (req, res, next) {
		var body = req.body;
		userValidate.registrationValidate(body, function (err, result) {
				if (err) {
						next(err);

				} else {
						next();
				}
		});

};

api.userProfileValidate = function (req, res, next) {
		var body = req.body;
		userValidate.profileValidate(body, function (err, result) {
				if (err) {
						next(err);

				} else {
						next();
				}
		});
};

// Admin request validations
api.adminRegisterValidate = (req, res, next) => {
		const {body} = req;

		adminValidate.registrationValidate(body, (err, result) => {
				if (err) {
						next(err);
				} else {
						next();
				}
		});
}

api.adminLoginValidate = (req, res, next) => {
		const {body} = req;

		adminValidate.loginValidate(body, (err, result) => {
				if (err) {
						next(err);
				} else {
						next();
				}
		});
}

api.adminLogoutValidate = (req, res, next) => {
		const {body} = req;

		adminValidate.logoutValidate(body, (err, result) => {
				if (err) {
						next(err);
				} else {
						next();
				}
		});
}

module.exports = api;

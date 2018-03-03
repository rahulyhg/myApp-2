"use strict";

const adminCtrl = require("../../controller/admin/adminControl");
const LOG = require("../../appUtil/logger");
const common = require("../../appUtil/commonUtil");
const statics = require('../../appUtil/appStatic');
const componentName = "userApi";
const api = {};

/**
 * [userLogin description]
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
api.adminLogin = (req, res, next) => {
	const params = {
			username: req.body.username || "",
			pass: req.body.pass || "",
			logId: req.body.logId || ""
		};
	LOG.info(componentName + ".adminLogin", req.body.logId, params);

	if(req.body.username && req.body.pass && req.body.logId){

		adminCtrl.login(params, function(err, result){
			if (err) {
				req.body.respoJson = err;
			}	else {
				const {status, code, displayMsg} = statics.commonError.active;
				const jsondata = {
					status,
					code,
					displayMsg,
					data: result
				};

				req.body.respoJson = jsondata;
			}

			next();
		});

	} else {
		LOG.error(componentName + ".adminLogin", req.body.logId, params);
		next();
	}
};

/**
 * Request to register new admin user
 * 
 * @param {object} req - HTTP request object
 * @param {object} res - HTTP response object
 * @param {function} next - middleware function
 * @return {function}
 */
api.adminRegister = function (req, res, next) {
	const {username = '', pass = '', role = '', logId = ''} = req.body;
	const params = {username, pass, role, logId};

	LOG.info(componentName + ".adminRegister", logId, params);
	
	if (username && pass && logId) {
		adminCtrl.createNewAdmin(params, function(err, result){
			if (err) {
				req.body.respoJson = err;
			} else {
				const {status, code, displayMsg} = statics.commonError.active;
				const jsondata = {
					status,
					code,
					displayMsg,
					data: result
				};
				req.body.respoJson = jsondata;
			}
			next();
		});

	} else {
		LOG.error(componentName + ".adminRegister", req.body.logId, params);
		next();
	}
};

/**
 * Request to log out admin user
 * 
 * @param {object} req - HTTP request object
 * @param {object} res - HTTP response object
 * @param {function} next - middleware function
 * @return {function}
 */
api.adminLogout = function(req, res, next){
	const params = {
		username: req.body.username || "",
		loginToken: req.body.loginToken || "",
		logId: req.body.logId || ""
	};

	LOG.info(componentName + ".adminLogout", req.body.logId, params);

	if(req.body.username && req.body.loginToken && req.body.logId){

		adminCtrl.logout(params, function(err, result){
			if (err) {
				req.body.respoJson = err;
			} else {
				const {status, code, displayMsg} = statics.commonError.active;
				const jsondata = {
					status,
					code,
					displayMsg,
					data: result
				};
				req.body.respoJson = jsondata;
			}
			next();
		});
	} else {
		LOG.error(componentName + ".userLogout", req.body.logId, params);
		next();
	}
};

module.exports = api;

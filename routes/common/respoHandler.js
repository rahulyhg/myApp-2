"use strict";
var statics = require('../../appUtil/appStatic');
var utils = require('../../appUtil/commonUtil');

var handlerObj = {};

handlerObj.addLogToken= function(req, res, next){
	var logID = utils.uuid();
	req.body.logId = logID;
	next();
};

/**
 * [priValidateToken description]
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
handlerObj.priTokenValidate = function (req, res, next) {

};

/**
 * [jsonResponse description]
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
handlerObj.jsonResponse = function (req, res, next) {
	if(req.body && req.body.respoJson){
		
		var respo = req.body.respoJson;
		var responseObj = {
			data: respo.data || "NA",
			status: respo.status || "NA",
			code: respo.code || 200,
			displayMsg: respo.msg || "no msg to display",
			logId: req.body.logId
		}
		res.status(respo.code).send(responseObj);
	}
	else{
		var responseObj = {
			data: "NA",
			status: statics.commonError.noResultFound.status,
			code: statics.commonError.noResultFound.code,
			displayMsg: statics.commonError.noResultFound.displayMsg,
			logId: req.body.logId
		}
		res.status(statics.commonError.noResultFound.code).send(responseObj);
	}
};

/**
 * [jsonResponseError description]
 * @param  {[type]}   err  [description]
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
handlerObj.jsonResponseError = function (err, req, res, next) {
	
};

module.exports = handlerObj;
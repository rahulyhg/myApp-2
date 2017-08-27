"use strict";
// global require
var LOG 			= require('../../appUtil/logger');
var emailUtils 		= require('../../appUtil/sendEmail');
var statics			= require("../../appUtil/appStatic");
var common			= require("../../appUtil/commonUtil");

var fromMaster 		= "admin-arthatic@codedep.com";
var componentName 	= "mail-handler";
var funcObj 		= {};


funcObj.sendVerifyMail = function(req, res, next){

	var params = {
		from: fromMaster,
		to: req.body.username,
		template_id: statics.emailTamplateKey.verify,
		substitution: {
			link: "www.codedep.in/verifyEmail?token=" + common.createJwtToken({authToken: req.body.respoJson.data.profId || ""})
		}
	};
	emailUtils.sendEmail(params, function(err, respo){
		next();
	});
};

module.exports = funcObj;
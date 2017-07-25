"use strict";
// global require
var logger = require('../../appUtil/logger');
var utils = require('../../appUtil/commonUtil');
var secureToken = require("../../controller/common/secureToken");
var LOG = require('../../appUtil/logger');
var userSchema = require("../../model/userSchema");
var statics = require("../../appUtil/appStatic");
var componentName = "auth";
var debug = require("debug")(componentName);

// constants
var auth = {};

auth.createAuthToken = function(req, res, next){
	
	var resp = req.body;
	var error = {};
	if(resp && resp.respoJson && resp.respoJson.data){
		var data = resp.respoJson.data;
		if(data && data.loginToken){
			// TODO: check from redis 
			LOG.info(componentName + ".createAuthToken", req.body.logId, "already logged-in");
			LOG.info(componentName + ".createAuthToken", req.body.logId, data);

			secureToken.saveToRedis(data.loginToken, data, req.body.logId, function(err, result){
				if(err){
					error.msg 		= statics.commonError.serverErr.displayMsg;
					error.status 	= statics.commonError.serverErr.status;
					error.code 		= statics.commonError.serverErr.code;
					error.logId 	= req.body.logId;
					error.err 		= err;

					req.body.respoJson = error;
					LOG.error(componentName + ".createAuthToken", req.body.logId, resp);
					next();
				}
				if(result){
					LOG.info(componentName + ".createAuthToken", req.body.logId, result);
					next();
				}
			});
			
		}else{
			var newtokenId = utils.uuid(64, "AN");
			resp.respoJson.data.loginToken = newtokenId;
			secureToken.saveToRedis(newtokenId, resp.respoJson.data, req.body.logId, function(err, result){
				if(err){
					error.msg 		= statics.commonError.serverErr.displayMsg;
					error.status 	= statics.commonError.serverErr.status;
					error.code 		= statics.commonError.serverErr.code;
					error.logId 	= req.body.logId;
					error.err 		= err;

					req.body.respoJson = error;
					LOG.error(componentName + ".createAuthToken", req.body.logId, resp);
					next();
				}
				if(result){

					LOG.info(componentName + ".createAuthToken", req.body.logId, result);
					// TODO: save newToken to DB and then pass
					data.loginToken = newtokenId;
				}

				var query = {
					username: resp.username
				};
				var updateCondition = {
					loginToken: newtokenId
				};
				userSchema.update(query, {"$set": updateCondition}, function(err, result){
					if(err){
						error.msg 		= statics.commonError.serverErr.displayMsg;
						error.status 	= statics.commonError.serverErr.status;
						error.code 		= statics.commonError.serverErr.code;
						error.logId 	= req.body.logId;
						error.err 		= err;

						req.body.respoJson = error;
						LOG.error(componentName + ".createAuthToken.userSchema.update", req.body.logId, err);
						next();
						
					}
					else{
						LOG.info(componentName + ".createAuthToken.userSchema.update", req.body.logId, result);
					}
					
					next();	
				});	
			});
		}
		

	}else{
		LOG.error(componentName, req.body.logId, req.body.logId);
		next();
	}
};

auth.deleteAuthToken = function(req, res, next){
	var resp = req.body;
	var error = {};
	if(resp && resp.respoJson){
		secureToken.removeFromRedis(resp.loginToken, req.body.logId, function(err, result){
			if(err){
				error.msg 		= statics.commonError.serverErr.displayMsg;
				error.status 	= statics.commonError.serverErr.status;
				error.code 		= statics.commonError.serverErr.code;
				error.logId 	= req.body.logId;
				error.err 		= err;

				req.body.respoJson = error;
				LOG.error(componentName + ".deleteAuthToken", req.body.logId, resp);
				next();
			}
			if(result){
				LOG.info(componentName + ".deleteAuthToken", req.body.logId, result);
			}

			var query = {
				username: resp.username
			};
			var updateCondition = {
				loginToken: ""
			};
			userSchema.update(query, {"$set": updateCondition}, function(err, result){
				if(err){
					LOG.error(componentName + ".deleteAuthToken.userSchema.update", req.body.logId, err);
				}
				else{
					LOG.info(componentName + ".deleteAuthToken.userSchema.update", req.body.logId, result);
				}
				
				next();	
			});				
		});

	}else{
		LOG.error(componentName, req.body.logId, req.body.logId);
		next();
	}
};

auth.validateAuthToken = function(req, res, next){
	var resp = req.body;
	var error = {};
	if(resp && resp.loginToken){
		secureToken.getFromRedis(resp.loginToken, req.body.logId, function(err, result){
			if(err){
				error.msg 		= statics.commonError.unAuthenticate.displayMsg;
				error.status 	= statics.commonError.unAuthenticate.status;
				error.code 		= statics.commonError.unAuthenticate.code;
				error.logId 	= req.body.logId;
				error.err 		= err;

				req.body.respoJson = error;
				LOG.error(componentName + ".validateAuthToken", req.body.logId, resp);
				next();
			}
			if(result){
				req.body.respoJson = result;
				LOG.info(componentName + ".validateAuthToken", req.body.logId, result);
				next();
			}		
		});

	}else{
		error.msg 		= statics.commonError.unAuthenticate.displayMsg;
		error.status 	= statics.commonError.unAuthenticate.status;
		error.code 		= statics.commonError.unAuthenticate.code;
		error.logId 	= req.body.logId;
		error.err 		= "loginToken not present";

		req.body.respoJson = error;
		LOG.error(componentName, req.body.logId, error);
		next();
	}
};

module.exports = auth;


(function(){
	if(require.main == module){
		// var req = {
		// 	body: {
		// 		respoJson: { 
		// 			status: 'success',
		// 			code: 200,
		// 			displayMsg: 'successfull',
		// 			data: 
		// 			   { 
		// 				username: 'test@test.com',
		// 				loginToken: '435678sdgfhjk4567fdgh56fght6hguygyu7',
		// 				isEnabled: 1 
		// 			} 
		// 		}
		// 	}
		// };
		// auth.createAuthToken(req, "", function(err, success){
		// 	console.log(err, success);
		// });
	}
}());
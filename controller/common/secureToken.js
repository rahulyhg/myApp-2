"use strict";
// global require
var redisClient = require('../../conn/redisconn');
var logger = require('../../appUtil/logger');
var config = require('../../config/appConfig');

// constants
var obj = new Object();
var ttl = config.redis.connect_timeout;

obj.saveToRedis = function(key, value, logToken, cb) {
	redisClient.hmset(key, value, function(err, result){
		if(err){
			logger.error("secureToken.saveToRedis", logToken, err);
			return cb(err);
		}

		if(result != "OK"){
			logger.error("secureToken.saveToRedis", logToken, result);
			return cb(err);
		}

		redisClient.expire(key, ttl, function(error, resp){
			if(err)
				logger.warn("secureToken.saveToRedis.expire", logToken, error);
			else
				logger.info("secureToken.saveToRedis.expire", logToken, resp);
		});

		logger.info("secureToken.saveToRedis", logToken, result);
		return cb(null, result);

	});
};

obj.removeFromRedis = function(key, logToken, cb) {
	redisClient.del(key, function(err, result){
		if(err){
			logger.error("secureToken.removeFromRedis", logToken, err);
			return cb(err);
		}

		if(result != 1){
			logger.error("secureToken.removeFromRedis", logToken, result);
			return cb(err);
		}

		logger.info("secureToken.removeFromRedis", logToken, result);
		return cb(null, result);
	});
};

obj.getFromRedis = function(key, logToken, cb) {
	redisClient.hgetall(key, function(err, result){
		if(err){
			logger.error("secureToken.getFromRedis", logToken, err);
			return cb(err);
		}

		logger.info("secureToken.getFromRedis", logToken, result);
		return cb(null, result);
	});
};

module.exports = obj;

(function(){
	if(require.main == module){

		// obj.saveToRedis("6tfdw6fgwgf7f784", {"value": "fun", name: 12445}, "123456wertyucvb", function(err, result){

		// 	console.log(err,result);

		// }); 
		
		obj.getFromRedis("",  "123456wertyucvb", function(err, result){

			console.log(err,result);

		});

		// obj.removeFromRedis("6tfdw6fgwgf7f784",  "123456wertyucvb", function(err, result){

		// 	console.log(err,result);

		// });
	}

}());
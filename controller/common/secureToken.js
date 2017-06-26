"use strict";
// global require
var redisClient = require('../../conn/redisconn');
var logger = require('../../appUtil/logger');
var config = require('../../config/appConfig');

// constants
var obj = new Object();
var ttl = config.redis.connect_timeout;

obj.saveToRedis = function(key, value, cb) {
	redisClient.hmset(key, value, function(err, result){
		if(err){
			logger.error("secureToken>>saveToRedis", key, err);
			return cb(err);
		}

		if(result != "OK"){
			logger.error("secureToken>>saveToRedis", key, result);
			return cb(err);
		}

		redisClient.expire(key, ttl, function(error, resp){
			if(err)
				logger.warn("secureToken>>saveToRedis>>expire", key, error);
			else
				logger.info("secureToken>>saveToRedis>>expire", key, resp);
		});

		logger.info("secureToken>>saveToRedis", key, result);
		return cb(null, result);

	});
}

obj.getFromRedis = function(key, cb) {
	redisClient.hgetall(key, function(err, result){
		if(err){
			logger.error("getFromRedis>>getFromRedis", key, err);
			return cb(err);
		}

		logger.info("getFromRedis>>saveToRedis", key, result);
		return cb(null, result);

	});
}

module.exports = obj;

// (function(){
// 	obj.saveToRedis("123456wertyucvb", {"value": "fun", name: 12445}, function(err, result){

// 		console.log(err,result);

// 	});

// 	obj.getFromRedis("123456wertyucvb", function(err, result){

// 		console.log(err,result);

// 	});
// }());
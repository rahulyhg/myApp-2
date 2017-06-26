"use strict";

var conf = require("./" + (process.env.NODE_ENV || "dev") + ".json");

module.exports = {
	db : conf.db,
	redis: conf.redis
};
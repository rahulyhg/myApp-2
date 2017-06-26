"use strict";

var ob = new Object();
ob.app = 10;
ob.getApp = function(){
	console.log(this.app);
};

ob.getApp;



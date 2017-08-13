"use strict";

var usrStatus = {
	0: "inactive",
	1: "active",
	2: "deactivated"
};

var commonError = {

	success: 		{code: 200, status: "success", displayMsg: "success transaction"},
	unAuthenticate: {code: 400, status: "failed", displayMsg: "Not Authenticate user"},
	noResultFound: 	{code: 401, status: "failed", displayMsg: "No Result/Match Found"},
	serverErr: 		{code: 402, status: "failed", displayMsg: "internal server error"},
	failed: 		{code: 500, status: "failed", displayMsg: "failed transaction"},
	inactive: 		{code: 410, status: "failed", displayMsg: "your profile is under review, please contact admin"},
	active: 		{code: 200, status: "success", displayMsg: "successfull"},
	deactivated: 	{code: 420, status: "failed", displayMsg: "your profile is deactivated, please contact admin"}
};

var staticSms = {
	successRegister: function(customerName, ID){
		return "Dear " + customerName + ", your profile has been registered with Arhatic Matrimony as PofileID : " + ID;
	},

	profileApproved: function(customerName, ID){
		return "Dear " + customerName + ", your profile has been approved with Arhatic Matrimony as PofileID : " + ID;
	}
};

module.exports.commonError = commonError;
module.exports.usrStatus = usrStatus;
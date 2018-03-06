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
	deactivated: 	{code: 420, status: "failed", displayMsg: "your profile is deactivated, please contact admin"},
	unAuthorisedUser: {code: 401, status: "failed", displayMsg: "Action not permissible for user role."},
	updateFailed: {code: 400, status: "failed", displayMsg: "Update action failed."}
};

var emailTamplateKey = {
	registerSuccess: "3127defd-541f-444a-a930-68d114f8a5a6",
	verify: "3afe6771-f1bd-49c7-82b7-ef5aab44e87a"
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
module.exports.emailTamplateKey = emailTamplateKey;
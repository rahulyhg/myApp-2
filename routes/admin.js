var express 		= require('express');
var respohandler 	= require('./common/respoHandler');
var preValidate 	= require("./common/validation");
var preValidate 	= require("./common/validation");
var auth 	    	= require("./common/auth");
var mailHandler 	= require("./common/mailHandler");
var router 			= express.Router();

/******************************** USER log in/out **********************************************/
//done
router.post('/admin/login', respohandler.addLogToken, preValidate.userLoginValidate, 
										adminProcess.userLogin, respohandler.jsonResponse);

//done
router.post('/admin/logout', respohandler.addLogToken, preValidate.userLogoutValidate, 
										adminProcess.userLogout, respohandler.jsonResponse);

//not done-
// router.post('/admin/addnew', respohandler.addLogToken, preValidate.userRegisterValidate, 
// 										userProcess.userRegister, respohandler.jsonResponse);

//done
router.post('/admin/getNewUsers', respohandler.addLogToken, preValidate.userRegisterValidate, 
										adminProcess.userRegister, respohandler.jsonResponse);

//working
router.post('/admin/getUpdateInfoUsers', respohandler.addLogToken, preValidate.userRegisterValidate, 
										adminProcess.userRegister, respohandler.jsonResponse);

//done
router.post('/admin/acceptDeclineUser', respohandler.addLogToken, preValidate.userRegisterValidate, 
										adminProcess.userRegister, respohandler.jsonResponse);

//done
router.post('/admin/acceptDeclineUpdate', respohandler.addLogToken, preValidate.userRegisterValidate, 
										adminProcess.userRegister, respohandler.jsonResponse);

//done
router.post('/admin/blockUser', respohandler.addLogToken, preValidate.userRegisterValidate, 
										adminProcess.userRegister, respohandler.jsonResponse);


// 1) accept user 
// 2) accept update in profile (or new) (not visible i search till accepted)
// 3) block/unblock by ID/name/email

module.exports = router;

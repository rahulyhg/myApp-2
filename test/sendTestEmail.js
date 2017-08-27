"use strict";

var config = require("../config/appConfig");
var template_id = "3127defd-541f-444a-a930-68d114f8a5a6";
//var sendgrid = require("sendgrid")(config.sendgridKey);

var helper = require('sendgrid').mail;
var fromEmail = new helper.Email('guptamohit385@gmail.com');
var toEmail = new helper.Email('guptamohit385@gmail.com');
var subject = 'Send with SendGrid';
var content = new helper.Content('text/plain', ' ');
var mail = new helper.Mail(fromEmail, subject, toEmail, content);

mail.setTemplateId(template_id);

// mail.personalizations[0].addSubstitution(
//   new helper.Substitution('-name-', 'Example User'));

var sg = require('sendgrid')(config.sendgridKey);
var request = sg.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: mail.toJSON()
});

sg.API(request, function (error, response) {
  if (error) {
    console.log('Error response received');
  }
  
  if (response.statusCode == 202) {
    console.log(response.statusCode);
  }
});
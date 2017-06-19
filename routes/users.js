var express = require('express');
var router = express.Router();

// authentication
// pre-validation

/* GET users listing. */
router.post('/user/login', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/user/registration', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

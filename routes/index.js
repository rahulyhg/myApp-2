var express = require('express');
var respohandler = require('./common/respoHandler');
var api = require('./api/index');
var router = express.Router();

/* GET common listing. */
router.get('/common/cities', respohandler.addLogToken, api.getCities, respohandler.jsonResponse);

router.get('/common/states', respohandler.addLogToken, api.getStates, respohandler.jsonResponse);

router.get('/common/countries', respohandler.addLogToken, api.getCountry, respohandler.jsonResponse);

router.get('/common/religions', respohandler.addLogToken, api.getReligions, respohandler.jsonResponse);

router.get('/common/castes', respohandler.addLogToken, api.getCastes, respohandler.jsonResponse);

router.get('/common/mothertongues', respohandler.addLogToken, api.getMothertongues, respohandler.jsonResponse);

/* POST common listing. */

router.post('/common/cities', respohandler.addLogToken, respohandler.jsonResponse);

router.post('/common/states', respohandler.addLogToken, respohandler.jsonResponse);

router.post('/common/countries', respohandler.addLogToken, respohandler.jsonResponse);

router.post('/common/religions', respohandler.addLogToken, respohandler.jsonResponse);

router.post('/common/casts', respohandler.addLogToken, respohandler.jsonResponse);

router.post('/common/mothertongues', respohandler.addLogToken, respohandler.jsonResponse);

/* PUT common listing. */

router.put('/common/cities', respohandler.addLogToken, respohandler.jsonResponse);

router.put('/common/states', respohandler.addLogToken, respohandler.jsonResponse);

router.put('/common/countries', respohandler.addLogToken, respohandler.jsonResponse);

router.put('/common/religions', respohandler.addLogToken, respohandler.jsonResponse);

router.put('/common/casts', respohandler.addLogToken, respohandler.jsonResponse);

router.put('/common/mothertongues', respohandler.addLogToken, respohandler.jsonResponse);

/* DELETE common listing. */

router.delete('/common/cities', respohandler.addLogToken, respohandler.jsonResponse);

router.delete('/common/states', respohandler.addLogToken, respohandler.jsonResponse);

router.delete('/common/countries', respohandler.addLogToken, respohandler.jsonResponse);

router.delete('/common/religions', respohandler.addLogToken, respohandler.jsonResponse);

router.delete('/common/casts', respohandler.addLogToken, respohandler.jsonResponse);

router.delete('/common/mothertongues', respohandler.addLogToken, respohandler.jsonResponse);

module.exports = router;

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('node');
});

router.post('/', function(req, res, next) {

});

module.exports = router;

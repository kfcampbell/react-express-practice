var express = require('express');
var router = express.Router();
const request = require('request');

/* GET users listing. */
router.get('/', function (req, res, next) {
    request('http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22',
        { json: true }, (err, insideRes, body) => {
            if (err) { return console.log(err); }
            res.send(body);
        });
});

module.exports = router;

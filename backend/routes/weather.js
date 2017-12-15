// http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22

var express = require('express');
var router = express.Router();
const request = require('request');

/* GET users listing. */
router.get('/', function (req, res, next) {
    //res.send('respond with a resource');
    request('http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22',
        { json: true }, (err, insideRes, body) => {
            if (err) { return console.log(err); }
            console.log('res: ' + JSON.stringify(insideRes));
            console.log('body: ' + JSON.stringify(body));
            res.send(body);
        });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.json([{
    id: 0,
    username: 'totally_not_a_juggalo'
  },
  {
    id: 1,
    username: 'likes_trashy_rap'
  }]);
});

module.exports = router;

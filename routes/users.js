var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Get all Users route');
});
router.post('/', function(req, res, next) {
  res.send('Create User route');
});
router.get('/:id', function(req, res, next) {
  res.send('Get one User route');
});
router.patch('/:id', function(req, res, next) {
  res.send('Edit User route');
});
router.delete('/:id', function(req, res, next) {
  res.send('Delete users route');
});

module.exports = router;

var express = require('express')
var router = express.Router()
var json = require('../data/rushing.json')

/* GET json data */
router.get('/', function (req, res, next) {
  res.json(json)
})

module.exports = router

const express = require('express')
const router = express.Router()
const Record = require('../../models/Record')
const Category = require('../../models/Category')

router.get('/new', (req, res) => {
  res.render('new')
  // res.send('fff')
})

module.exports = router
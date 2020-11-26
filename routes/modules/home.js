const express = require('express')
const router = express.Router()
const Record = require('../../models/Record')

router.get('/', (req, res) => {
  Record.find()
    .lean()
    .then(records => {
      res.render('/', { records })
    })
})

module.exports = router
const express = require('express')
const router = express.Router()
const Record = require('../../models/Record')

router.get('/', (req, res) => {
  // Record.find()
  //   .lean()
  //   .then(records => res.render('/', { records }))
  //   .catch(error => console.log(error))
  res.send('hello')
})

module.exports = router
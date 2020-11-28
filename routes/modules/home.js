const express = require('express')
const router = express.Router()
const Record = require('../../models/Record')
const Category = require('../../models/Category')

router.get('/', (req, res) => {
  Record.find()
    // .then(() => { return Record.category = Category.find() }
    // )
    .lean()
    .then((records) => {
      return res.render('index', { records })
    })
    // .then(
    //   Category.find()
    //     .lean()
    //     .then(categories => { return res.render('index', { categories }) })
    // )
    .catch(error => console.log(error))
})

module.exports = router
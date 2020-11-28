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
      records.forEach((record) => {
        return Category.findOne({ category: record.category })
          .then((icon) => {
            record.icon = icon.icon
          })
      })
      return res.render('index', { records })
    })
    .catch(error => console.log(error))
})

module.exports = router
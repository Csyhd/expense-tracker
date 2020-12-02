const express = require('express')
const router = express.Router()
const Record = require('../../models/Record')
const Category = require('../../models/Category')
const totalAmounts = require('../../public/javascripts/totalAmounts')

router.get('/', (req, res) => {
  Record.find()
    .lean()
    .then((records) => {
      totalAmount = totalAmounts(records)
      records.forEach((record) => {
        return Category.findOne({ category: record.category })
          .then((icon) => {
            return record.icon = icon.icon
          })
      })
      Category.find()
        .lean()
        .then((categories) => {
          return res.render('index', { records, totalAmount, categories })
        })

    })
    .catch(error => console.log(error))
})

module.exports = router
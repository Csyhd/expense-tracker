const express = require('express')
const router = express.Router()
const Record = require('../../models/Record')
const Category = require('../../models/Category')
let totalAmount = 0

router.get('/', (req, res) => {
  Record.find()
    .lean()
    .then((records) => {
      records.forEach((record) => {
        totalAmount += record.amount
        return Category.findOne({ category: record.category })
          .then((icon) => {
            return record.icon = icon.icon
          })
      })
      return res.render('index', { records, totalAmount })
    })


    // .then((records) => {
    //   return res.render('index', { records })
    // })
    .catch(error => console.log(error))
})

module.exports = router
const express = require('express')
const router = express.Router()
const Record = require('../../models/Record')
const Category = require('../../models/Category')
const totalAmounts = require('../../public/javascripts/totalAmounts')

router.get('/new', (req, res) => {
  Category.find()
    .lean()
    .then((categories) => {
      res.render('new', { categories })
    })
})

router.post('/', (req, res) => {
  const newRecord = req.body
  console.log(newRecord)
  Record.create(newRecord)
    .then(() => {
      return res.redirect('/')
    })
})

router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  Record.findById(id)
    .lean()
    .then((record) => {
      return Category.find()
        .lean()
        .then((categories) => {
          categories.forEach((category) => {
            if (record.category === category.category) {
              category.selected = true
            }
          })
          return res.render('edit', { record, categories })
        })
    })
})


router.put('/:id', (req, res) => {
  const id = req.params.id
  const editDate = req.body
  return Record.findById(id)
    .then(record => {
      record.name = editDate.name
      record.date = editDate.date
      record.category = editDate.category
      record.amount = editDate.amount
      return record.save()
    })
    .then(() => {
      return res.redirect('/')
    })
    .catch(error => console.log(error))
})


router.delete('/:id', (req, res) => {
  const id = req.params.id
  Record.findById(id)
    .then((record) => {
      return record.remove()
    }).then(() => {
      return res.redirect('/')
    })
})

router.get('/filter', (req, res) => {
  const filterId = req.query.category
  Category.findById(filterId)
    .then((id) => {
      return Record.find({ category: id.category })
        .lean()
        .then((records) => {
          totalAmount = totalAmounts(records)
          records.forEach((record) => {
            return Category.findOne({ category: record.category })
              .then((icon) => {
                return record.icon = icon.icon
              })
          })
          return Category.find()
            .lean()
            .then((categories) => {
              return res.render('index', { records, totalAmount, categories, filterId })
            })
        })
    })
})

module.exports = router
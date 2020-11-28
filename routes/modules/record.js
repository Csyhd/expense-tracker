const express = require('express')
const router = express.Router()
const Record = require('../../models/Record')
const Category = require('../../models/Category')

router.get('/new', (req, res) => {
  res.render('new')
})

router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  Record.findById(id)
    .lean()
    .then((record) => {
      return res.render('edit', { record })
    })
})

router.put('/:id', (req, res) => {
  const id = req.params.id

  Record.findById(id)
    .then((record) => {
      return res.render('edit', { record })
    })
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

module.exports = router
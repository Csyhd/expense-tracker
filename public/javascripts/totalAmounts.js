const express = require('express')

const Category = require('../../models/Category')


function totalAmounts(records) {
  let totalAmount = 0
  records.forEach((record) => {
    totalAmount += record.amount
  })
  return totalAmount
}
module.exports = totalAmounts
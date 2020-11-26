const Record = require('../../models/Record')
const db = require('../../config/mongoose')

db.once('open', () => {
  for (let i = 0; i < 10; i++) {
    Record.create({
      name: `name-${i}`,
      category: `category-${i}`,
      date: `date-${i}`
      amount: `amount-${i}`,
      totalAmount: `totalAmount-${i}`
    })
  }
  console.log('Done')
})
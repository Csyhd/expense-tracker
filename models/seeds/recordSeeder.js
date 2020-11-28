const Record = require('../Record')
const db = require('../../config/mongoose')

db.once('open', () => {
  const RecordList = [
    {
      name: '午餐',
      date: '2020/11/20',
      category: '餐飲食品',
      amount: 560,
      totalAmount: 560
    }
  ]
  Record.create(RecordList)
    .then(() => {
      console.log('Record created')
      db.close()
    })
})
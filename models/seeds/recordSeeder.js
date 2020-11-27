const Record = require('../Record')
const db = require('../../config/mongoose')

db.once('open', () => {
  const RecordList = []
  for (let i = 0; i < 10; i++) {
    RecordList.push({
      name: `name-${i}`,
      date: i,
      amount: i,
      totalAmount: i
    })
  }
  Record.create(RecordList)
    .then(() => {
      console.log('Record created')
      db.close()
    })
})
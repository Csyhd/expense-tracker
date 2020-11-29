const Record = require('../Record')
const db = require('../../config/mongoose')

db.once('open', () => {
  const RecordList = [
    {
      name: '午餐',
      date: '2020/11/20',
      category: '餐飲食品',
      amount: 189
    },
    {
      name: '捷運月票',
      date: '2020/10/20',
      category: '交通出行',
      amount: 1280
    }, {
      name: '衣服',
      date: '2020/12/21',
      category: '休閒娛樂',
      amount: 560
    }, {
      name: '電影票',
      date: '2020/10/11',
      category: '休閒娛樂',
      amount: 560
    }, {
      name: '房租',
      date: '2020/12/05',
      category: '家居物業',
      amount: 9800
    }
  ]
  Record.create(RecordList)
    .then(() => {
      console.log('Record created')
      db.close()
    })
})
const Category = require('../../models/Category')
const db = require('../../config/mongoose')


db.once('open', () => {
  const date = [
    {
      category: '家居物業',
      icon: '<i class="fas fa-home"></i>'
    },
    {
      category: '交通出行',
      icon: '<i class="fas fa-shuttle-van"></i>'
    },
    {
      category: '休閒娛樂',
      icon: '<i class="fas fa-grin-beam"></i>'
    },
    {
      category: '餐飲食品',
      icon: '<i class="fas fa-utensils"></i>'
    },
    {
      category: '其他',
      icon: '<i class="fas fa-pen"></i>'
    }
  ]

  Category.create(date)
    .then(() => {
      console.log('category created')
      return db.close()
    })
})




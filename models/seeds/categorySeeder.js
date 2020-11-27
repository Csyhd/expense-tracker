const Category = require('../../models/Category')
const db = require('../../config/mongoose')


db.once('open', () => {
  const date = []
  for (let i = 0; i < 10; i++) {
    date.push({ category: `category-'${i}'` })
  }
  Category.create(date)
    .then(() => {
      console.log('category created')
      return db.close()
    })
})




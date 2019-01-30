const mongoose = require('./connection')
const seeds = require('./seed.json')

// const Story = mongoose.model('Story')
const Story = require("../models/story")
mongoose.Promise = Promise

Story.remove({}).then(() => {
//   console.log('Dropped the DB')
  Story.collection.insert(seeds).then(seededEntries => {
    // console.log(seededEntries)
    mongoose.connection.close()
    // process.exit()
  })
})
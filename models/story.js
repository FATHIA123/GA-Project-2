// comment schema 
// stroy schema 

const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const StorySchema = new Schema({
  title: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  content: String
})




// module.exports = {
//   Story: mongoose.model("story", StorySchema ),
//   Comment: mongoose.model("Comment", Comment)
// };


mongoose.model('Story', StorySchema)

module.exports = mongoose
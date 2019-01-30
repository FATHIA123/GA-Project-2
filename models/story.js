// comment schema 
// stroy schema 
const mongoose = require("../db/connection");
const Schema = mongoose.Schema;


const Story = new Schema({
  title: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  content: String
})




// module.exports = {
//   Story: mongoose.model("story", StorySchema ),
//   Comment: mongoose.model("Comment", Comment)
// };




module.exports = mongoose.model("Story", Story)
// module.exports = mongoose.model("User", User);

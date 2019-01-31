// comment schema 
// stroy schema 
const mongoose = require("../db/connection");
const Schema = mongoose.Schema;




const Comment = new Schema({
  content: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});
const Story = new Schema({
  title: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  content: String,
  comments: [Comment]
})

module.exports = {
  Story: mongoose.model("Story", Story),
  Comment: mongoose.model("Comment", Comment)
};




// module.exports = mongoose.model("Story", Story)
// module.exports = mongoose.model("User", User);

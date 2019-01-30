const Story = require("../models/story");
// const Note = require('../models/Note')

module.exports = {
  index: (req, res) => {   
   Story.find({})
   .sort({ createdAt: -1 })
   .then( stories => {
       res.render('story/listOfStories', { stories })
   })

  }
};
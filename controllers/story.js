// const { Tweet, Comment } = require("../models/story");
// call models 

const { Story, Comment } = require("../models/story");


module.exports = {
 //list of stories  
    index: (req, res) => {   
        Story.find({})
        .sort({ createdAt: -1 })
        .then( stories => {
            res.render('story/listOfStories', { stories })
        })
     
       },
// Render FORM to create a new story of connect
new: (req, res) => {
    res.render("story/createStory");
  },

create: (req, res) => {
    Story.create({
    title: req.body.title,
    content: req.body.story.content
        }).then(story => {
            // res.json(story);
            console.log(story._id)
            res.redirect(`/story/${story._id}`)
            })
           
},
// I dont know if it is saving on my db because if it was the most recent should go on top.

show: (req, res) => {   
    Story.findOne({_id: req.params.id})
    .then( story => {
        res.render('story/listOneStory', { story })
    })
 
   },
update: (req, res) => {
   
    let { content } = req.body;
    Story.findOne({ _id: req.params.id }).then(story => {
     Comment.create({ content }).then(newComment => {
         story.comments.push(newComment);
     story.save(err => {
        res.redirect(`/story/${story.id}`);
      });
    });
})
      
},

//   story.comments.push({
    //     content,
    //     // author: req.user._id
    //   });



delete: (req, res) => {
    Story.findOneAndRemove({ _id: req.params.id })
    .then( (story) => {
        // res.json(story)
        res.redirect('/')
    })
},


}










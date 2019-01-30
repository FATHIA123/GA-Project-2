// const { Tweet, Comment } = require("../models/story");
// call models 

const Story = require("../models/story");


module.exports = {
   
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
    // let { content } = req.body;
    // Story.findOne({ _id: req.params.id }).then(story => {
    //   story.push({
    //     title,
    //     content,
    //   });
    //   story.save(err => {
    //     res.redirect(`/story/${story._id}`);
    //   });
    // });
    // let { review } = req.body.cereal
    //     Story.findOneAndUpdate(
    //         { _id: req.params.id}, 
    //         {$set:{review:review}})
    //     .then(() => {res.redirect('/')})
},

delete: (req, res) => {
    Story.findOneAndRemove({ _id: req.params.id })
    .then( (story) => {
        // res.json(story)
        res.redirect('/')
    })
},


}










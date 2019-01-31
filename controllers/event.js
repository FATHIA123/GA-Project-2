
const Event = require("../models/event");

module.exports = {
    create: (req, res) => {
        Event.create({
        title: req.body.title,
        content: req.body.story.content
            }).then(story => {
                // res.json(story);
                console.log(story._id)
                res.redirect(`/story/${story._id}`)
                })
               
    },



update: (req, res) => {
    let { content } = req.body;
    Event.findOne({ _id: req.params.id }).then(event => {
      event.events
      .push({
        content,
        // author: req.user._id
      });
      event.save(err => {
        res.redirect(`/comment/${comment._id}`);
      });
    });
}
}
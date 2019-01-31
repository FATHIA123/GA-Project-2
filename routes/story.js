const express = require("express");
const router = express.Router();
const storyController = require("../controllers/story");


// list of stories route
router.get('/', storyController.index);

// Render FORM to create a new story of connect

router.get("/new",  storyController.new);
// when a story is written <post> show it on the home page
router.post("/", storyController.create);
// show one story
router.get("/:id", storyController.show);

// update the comment
router.put("/:id", storyController.update);

// delete the story
router.delete("/:id", storyController.delete);


module.exports = router;

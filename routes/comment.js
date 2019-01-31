const express = require("express");
const router = express.Router();
const storyController = require("../controllers/event");

router.post("/", storyController.create);
// router.get("/new", storyController.new);
// router.get("/:id", storyController.show);
router.put("/:id", storyController.update);

module.exports = router;
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/PROJECT-2");
mongoose.Promise = Promise;
module.exports = mongoose;
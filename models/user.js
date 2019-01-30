// // user model

// const mongoose = require('mongoose')
// const Schema = mongoose.Schema;
// // const bcrypt = require("bcrypt-nodejs");
// // const mongoose = require("../db/connection");


// const UserSchema = new Schema({
//   userName: String,
//   email: String,
//   password: String

// })

// User.methods.encrypt = function(password) {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// User.methods.validPassword = function(password) {
//   return bcrypt.compareSync(password, this.local.password);
// };

// mongoose.model('User', UserSchema)

// module.exports = mongoose
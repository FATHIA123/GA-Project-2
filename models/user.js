// user model

const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// const bcrypt = require("bcrypt-nodejs");
// const mongoose = require("../db/connection");


const UserSchema = new Schema({
  userName: String,
  email: String,
  password: String

})

mongoose.model('User', UserSchema)

module.exports = mongoose
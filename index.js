const express = require("express");
const hbs = require("hbs");
const body = require("body-parser")
const methodOverride = require("method-override")
// const passport = require('passport')

// require('./config/passport')(passport)
// app.use(passport.initialize())
// app.use(passport.session())

const app = express();
app.set("view engine", "hbs");
app.use(body.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use(require("./routes/index.js"));

app.listen(3000, () => console.log("server is running"));

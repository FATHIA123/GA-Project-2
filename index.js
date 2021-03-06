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

// app.set('port', process.env.PORT || 3000)

//   app.listen(app.get('port'), () => {
//     console.log(` PORT: ${app.get('port')} `)
//   })

  app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => console.log(`server is running on PORT ${app.get('port')}`));

// app.listen(3000, () => console.log("server is running"));

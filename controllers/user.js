
// const passport = require("passport");

const User = require("../models/User");
// const Story = require("../models/story");

module.exports = {
//   show: (req, res) => {
//     User.findOne({ _id: req.params.id })
//       .populate({
//         path: "tweets",
//         options: { limit: 5, sort: { createdAt: -1 } }
//       })
//       .then(user => {
//         res.render("user/show", { user });
//       });
//   },
  login: (req, res) => {
    res.render("user/login");
  },
//   createLogin: (req, res) => {
//     const login = passport.authenticate("local-login", {
//       successRedirect: "/",
//       failureRedirect: "/user/login",
//       failureFlash: true
//     });

//     return login(req, res);
//   },
  signUp: (req, res) => {
    res.render("user/signup");
  },
//   createSignUp: (req, res) => {
//     const signup = passport.authenticate("local-signup", {
//       successRedirect: "/",
//       failureRedirect: "/signup",
//       failureFlash: true
//     });

//     return signup(req, res);
//   },
  
}
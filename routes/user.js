// // const express = require('express');
// // const router = express.Router();
// // const userController = require('../controllers/user.js');

// // router.get('/login', userController.login);
// // router.post('/login', userController.createLogin);
// // router.get('/sign-up', userController.signUp);
// // router.post('/sign-up', userController.createSignUp);
// // router.get('/logout', userController.logout);
// // router.get('/:id', userController.show);

// // router.post('/signup', (req, res) => {
// //     var signupStrategy = passport.authenticate('local-signup', {
// //       successRedirect : '/',
// //       failureRedirect : '/signup',
// //       failureFlash : true
// //     });
  
// //     return signupStrategy(req, res);
// //   })


// //   router.get('/login', (req, res) => {
// //     response.render('login.hbs', { message: req.flash('loginMessage') });
// //   })

// //   router.post('/login', (req, res) => {
// //     var loginProperty = passport.authenticate('local-login', {
// //       successRedirect : '/',
// //       failureRedirect : '/login',
// //       failureFlash : true
// //     });
  
// //     return loginProperty(req, res);
// //   })

// module.exports = router;
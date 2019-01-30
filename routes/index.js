const express = require('express');
const router = express.Router();
// require('./config/passport')(passport);

// app.use(function (req, res, next) {
//   res.locals.currentUser = req.user;
//   next();
// });


router.use('/', require('./application.js'));
// router.use('/user', require('./user'));
router.use('/story', require('./story'));
// router.use('/comment', require('./comment'));

// // router.all('*', (req, res) => {
// //   res.status(400).send();
// // });

module.exports = router;

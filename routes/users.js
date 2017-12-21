var express = require('express');
var router = express.Router();
var multer = require('multer'); //multer for file uploads from Post routes
var upload = multer({dest: './uploads'});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});
router.post('/register', upload.single('profileimage'), function(req, res, next) {
  res.send('user registered');
//   var name = req.body.name;
//   var email = req.body.email;
//   var username = req.body.username;
//   var password = req.body.password;
//   var password2 = req.body.password2;
// //it will be req.files if uploads were an array ie more than one file
//   if(req.file) {
//    console.log("Uploading file.....");
//    var profileimage = req.file.filename;
//  }else{
//    console.log("No File uploaded....");
//    var profileimage = 'noimage.jpg';
//  }
//  //Form validator
//  req.checkBody('name', 'Name field is required').notEmpty();
//  req.checkBody('email', "Email field is required").isEmail();
//  req.checkBody('username', "Username field is required").notEmpty();
//  req.checkBody('password', "Password field is required").notEmpty();
//  req.checkBody('password2', "Passwords do not match").equals(req.body.password);
// //Check errors
// var errors = req.validationErrors();
//   if (errors){
//     console.log('Errors');
//   }else{
//     console.log('No Errors');
//   }

});

module.exports = router;
